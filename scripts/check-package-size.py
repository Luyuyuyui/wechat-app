# -*- coding: utf-8 -*-
"""
测算小程序实际进包体积。

排除规则与 project.config.json 的 packOptions.ignore 保持一致：
materials/、assets/videos/、README.md 不计入。

用法：
    python scripts/check-package-size.py
"""
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

IGNORE_TOP = ('materials', '.git', '.workbuddy-ai', 'node_modules', 'scripts', '__pycache__')
IGNORE_PREFIX = ('assets/videos/',)
IGNORE_FILES = ('README.md',)
IGNORE_EXT = ('.gitignore',)

LIMIT = 2 * 1024 * 1024

total = 0
groups = {}

for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in IGNORE_TOP]
    for f in files:
        p = os.path.join(root, f)
        rel = os.path.relpath(p, '.').replace(os.sep, '/')
        if rel.startswith(IGNORE_PREFIX) or rel in IGNORE_FILES:
            continue
        if rel.lower().endswith(IGNORE_EXT):
            continue
        sz = os.path.getsize(p)
        total += sz
        key = '/'.join(rel.split('/')[:2]) if '/' in rel else '根目录文件'
        groups[key] = groups.get(key, 0) + sz

print('实际进包体积 : %.2f MB (%d bytes)' % (total / 1024 / 1024, total))
print('主包上限     : 2.00 MB')
print('占用         : %.1f%%' % (total / LIMIT * 100))
print()

if total > LIMIT:
    print('剩余         : 超出 %.0f KB' % ((total - LIMIT) / 1024))
else:
    print('剩余         : %.0f KB' % ((LIMIT - total) / 1024))

print()
for k, v in sorted(groups.items(), key=lambda x: -x[1])[:14]:
    print('  %8.0f KB   %s' % (v / 1024, k))

print()
if total > LIMIT:
    print('!! 超出主包限制，请压缩 assets/images/ 下的图片')
    sys.exit(1)
print('OK 符合主包限制')
