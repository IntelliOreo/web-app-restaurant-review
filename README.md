# Restaurant Review - Web App

## How to contribute

1. Fork this repository

2. Clone the fork to your local machine with the command below
   ```bash
   git clone <SSH repository uri>
   ```
3. Crate a new branch with the name or feature you are working on
   ```bash
   git checkout -b <MyBranch>
   ```
4. This repository needs .env variables. So please create a new .env file on the root
   folder and add the following variables:
   `   PORT=8080
 MONGO_URI=`
   Please follow the link below to learn on how to connect a mongo db to your local branch.
   [Link](https://www.youtube.com/watch?v=bhiEJW5poHU&ab_channel=ArpanNeupane)
5. Start adding your changes
6. Add and Commit your changes
   ```bash
   git add <Name of the file> or git add .
   git commit -m 'My commit comment'
   ```
7. Once you are sure you finish your work, push your changes to your github repo with the new branch name
   ```bash
   git push origin <MyBranchName>
   ```
   This will create a new branch in your GitHub repo.
8. Follow the steps to create a Pull Request in Github. You can also check this [link](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
9. Once your changes are reviewed you will receive a notification saying your branch was merged.
10. To update your forked Main/Dev branch, click on `Sync Fork` dropdown and select `Update Branch`
11. Then update your local machine branch with the following commands:
    ```bash
    git pull origin main (or the name of your main branch of your machine)
    ```
