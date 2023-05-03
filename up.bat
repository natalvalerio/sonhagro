@echo off
cls
echo ---------------------------------------------
echo %1
echo ---------------------------------------------
git add "%1"
git commit -m "%1"
git push -u origin main
rem git status