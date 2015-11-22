#!/bin/bash

find . -name '*scss' -type f | \
    xargs sed \
     -ie 's/fonts.gstatic.com/fonts-gstatic.lug.ustc.edu.cn/g'
