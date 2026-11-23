#!/usr/bin/env bash

git add -A
git commit -m "Otomatik güncelleme - $(date '+%Y-%m-%d %H:%M:%S')"
git push

echo "Değişiklikler GitHub'a gönderildi."
