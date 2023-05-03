git init
dir 
git add README.md
git add up.bat
git add init.bat
git add .gitignore
git add GITHUB.docx
git commit -m "readme"
git branch -M main
git remote add origin https://github.com/natalvalerio/%1.git
git push -u origin main
git config http.postBuffer 2000000000