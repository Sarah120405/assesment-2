git init

git branch -M main
git add .
git commit -m "Initial starter files"

git checkout -b feature/bikes-discount

# Make one change here, then stage and commit it
# Example: update the bike pricing or discount logic
# git add .
# git commit -m "Add bike discount feature"

git add .
git commit -m "Add bike discount feature"

git checkout main
git merge --no-ff feature/bikes-discount -m "Merge feature/bikes-discount"

git log --oneline --graph --all > git-log.txt
