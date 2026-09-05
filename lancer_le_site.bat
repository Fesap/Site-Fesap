@echo off
cd /d "%~dp0"
start "" http://localhost:8743/ui_kits/website/index.html
python -m http.server 8743
