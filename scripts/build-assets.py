# -*- coding: utf-8 -*-
"""
从 materials/ 生成 assets/ 下的小程序资源。

用法：
    python scripts/build-assets.py              # 全部重建
    python scripts/build-assets.py --images     # 只处理图片
    python scripts/build-assets.py --videos     # 只处理视频与海报
    python scripts/build-assets.py --interview  # 只转码访谈原片

依赖：
    pip install Pillow imageio-ffmpeg

说明：
    assets/videos/ 与 materials/interview/ 体积过大，不进 git 也不进代码包。
    克隆仓库后运行本脚本即可在本地重建，供模拟器预览使用。
"""
import argparse
import io
import os
import shutil
import subprocess
import sys
import zipfile

try:
    from PIL import Image
except ImportError:
    sys.exit('缺少 Pillow，请先执行： pip install Pillow imageio-ffmpeg')

try:
    import imageio_ffmpeg
    FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
except Exception:
    FFMPEG = shutil.which('ffmpeg') or 'ffmpeg'

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

M = 'materials'
A = 'assets'

# ——— 图片：源 -> 目标（同时决定压缩宽度与质量）———
# (materials 相对路径, assets 相对路径, 最大宽度, JPEG 质量)
IMAGES = [
    ('images/作品-银花丝绣球-01.png', 'images/works/work-01-cover.jpg', 820, 76),
    ('images/作品-银花丝绣球-04.png', 'images/works/work-01-1.jpg',    820, 76),
    ('images/作品-银花丝绣球-02.jpg', 'images/works/work-01-2.jpg',    820, 76),
    ('images/作品-银花丝绣球-03.png', 'images/works/work-01-3.jpg',    820, 76),
    ('images/作品-苗族织锦-01.jpg',   'images/works/work-02-cover.jpg', 820, 76),
    ('images/作品-苗族银头饰-01.jpg', 'images/works/work-03-cover.jpg', 820, 78),
    ('images/作品-紫荆花-01.jpg',     'images/works/work-04-cover.jpg', 820, 76),
    ('images/作品-花山岩画-01.jpg',   'images/works/work-05-cover.jpg', 820, 76),
    ('images/作品-花山岩画-02.jpg',   'images/works/work-05-1.jpg',     820, 76),
    ('images/作品-苗族银头饰-01.jpg', 'images/hero/cover.jpg',          900, 78),
    ('images/宣讲会-城北小学-01.jpg', 'images/person/teaching-1.jpg',   820, 78),
    ('images/宣讲会-城北小学-02.jpg', 'images/person/teaching-2.jpg',   820, 78),
]

# ——— 来源视频：源 -> 目标（海报编号）———
VIDEOS = [
    ('videos/来源-01-苗银做工过程及苗银简要介绍.mp4', 'videos/v09-craft-intro.mp4',    9),
    ('videos/来源-02-马贵兵老师个人自述.mp4',          'videos/v10-self-intro.mp4',    10),
    ('videos/来源-03-奥运冠军体验苗饰制作.mp4',        'videos/v01-olympic-athlete.mp4', 1),
    ('videos/来源-04-苗族银饰特写.mp4',                'videos/v02-silver-closeup.mp4', 2),
    ('videos/来源-05-苗族风情.mp4',                    'videos/v03-miao-style-1.mp4',   3),
    ('videos/来源-06-苗族风情2.mp4',                   'videos/v04-miao-style-2.mp4',   4),
    ('videos/来源-07-苗族风情3.mp4',                   'videos/v05-miao-style-3.mp4',   5),
    ('videos/来源-08-苗族风情4.mp4',                   'videos/v06-miao-style-4.mp4',   6),
    ('videos/来源-09-苗银做工过程.mp4',                'videos/v07-craft-1.mp4',        7),
    ('videos/来源-10-苗银做工过程2.mp4',               'videos/v08-craft-2.mp4',        8),
]

INTERVIEW_SRC = 'interview/IMG_8258.MOV'
INTERVIEW_DST = 'videos/v11-interview.mp4'


def _ensure(path):
    d = os.path.dirname(path)
    if d:
        os.makedirs(d, exist_ok=True)


def _kb(n):
    return n // 1024


def build_images():
    print('== 图片 ==')
    for src, dst, max_w, q in IMAGES:
        s = os.path.join(M, src)
        d = os.path.join(A, dst)
        if not os.path.exists(s):
            print('  跳过（源缺失）: %s' % s)
            continue
        _ensure(d)
        im = Image.open(s).convert('RGB')
        if im.width > max_w:
            im = im.resize((max_w, int(im.height * max_w / im.width)), Image.LANCZOS)
        im.save(d, 'JPEG', quality=q, optimize=True, progressive=True)
        print('  %5d KB  %s' % (_kb(os.path.getsize(d)), dst))


def _poster(src, dst, sec=3):
    _ensure(dst)
    for ss in (['-ss', '00:00:%02d' % sec], None):
        cmd = [FFMPEG, '-y', '-hide_banner', '-loglevel', 'error']
        if ss:
            cmd += ss
        cmd += ['-i', src, '-frames:v', '1',
                '-vf', 'scale=720:-1:flags=lanczos', '-q:v', '4', dst]
        subprocess.run(cmd)
        if os.path.exists(dst) and os.path.getsize(dst) > 1024:
            return True
    return False


def build_videos():
    print('== 来源视频与海报 ==')
    for src, dst, poster_no in VIDEOS:
        s = os.path.join(M, src)
        d = os.path.join(A, dst)
        if not os.path.exists(s):
            print('  跳过（源缺失）: %s' % s)
            continue
        _ensure(d)
        shutil.copy2(s, d)
        p = os.path.join(A, 'images/video/poster-%02d.jpg' % poster_no)
        ok = _poster(d, p)
        print('  %5d KB  %s   海报%s' % (_kb(os.path.getsize(d)), dst, 'OK' if ok else '失败'))


def build_interview():
    print('== 团队访谈原片 ==')
    s = os.path.join(M, INTERVIEW_SRC)
    d = os.path.join(A, INTERVIEW_DST)
    if not os.path.exists(s):
        print('  跳过（源缺失）: %s' % s)
        print('  提示：访谈原片体积过大未进仓库，请自行放入该路径后重跑。')
        return
    _ensure(d)
    cmd = [FFMPEG, '-y', '-hide_banner', '-loglevel', 'error',
           '-i', s, '-vf', 'scale=-2:720:flags=lanczos',
           '-c:v', 'libx264', '-preset', 'medium', '-crf', '23',
           '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart',
           '-ss', '00:00:02', d]
    subprocess.run(cmd)
    if os.path.exists(d):
        print('  %5d KB  %s' % (_kb(os.path.getsize(d)), INTERVIEW_DST))
        p = os.path.join(A, 'images/video/poster-11.jpg')
        if _poster(d, p, sec=10):
            print('  海报 OK  images/video/poster-11.jpg')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--images', action='store_true')
    ap.add_argument('--videos', action='store_true')
    ap.add_argument('--interview', action='store_true')
    args = ap.parse_args()

    if not (args.images or args.videos or args.interview):
        args.images = args.videos = args.interview = True

    if args.images:
        build_images()
    if args.videos:
        build_videos()
    if args.interview:
        build_interview()
    print('\n完成。')


if __name__ == '__main__':
    main()
