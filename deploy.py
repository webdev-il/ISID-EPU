from subprocess import Popen, PIPE
import subprocess,time
import shutil
deploybranch = 'deploy'
basehref = 'https://hardik-rajpal.github.io/ISID-EPU/'
cachedirs = [
    '.angular',
    'node_modules/.cache',
    'dist'
    ]
for dirname in cachedirs:
    shutil.rmtree(dirname,ignore_errors=True)