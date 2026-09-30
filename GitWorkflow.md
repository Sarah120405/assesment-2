git init

git branch -M main
git add .
git commit -m "Initial starter files"

git checkout -b feature/bikes-discount

git add .
git commit -m "Add bike discount feature"

git checkout main
git merge --no-ff feature/bikes-discount -m "Merge feature/bikes-discount"

git log --oneline --graph --all > git-log.txt
