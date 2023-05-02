---
title: "サブアカウントでgithub clone "
date: "June 25 2021"
excerpt: "This is the excerpt2"
cover_image: "/images/posts/img1.jpg"
---

## git push orign main が失敗する

---

- #### やったこと

  - git push orign main でリモートリポジトリに変更を反映させようとしたが、pemission エラーで失敗。サブアカで push してると思ったが、どうやらメインでやってることになり、失敗する。

---

- #### 原因

  - clone 時にサブアカで clone すると明示的にしなければいけなかったが、git clone リポジトリ URL とよくあるやり方をした為、失敗した。

---

- #### 対処法

  > $ git clone github.private:https://github.com/StartdashHitokage96/gaogao-book-tutrial.git
  > Cloning into 'gaogao-book-tutrial'...
  > fatal: protocol 'github.private:https' is not supported
  > **失敗**

  > $ git clone git@github.private:https://github.com/StartdashHitokage96/gaogao-book-tutrial.gi
  > t
  > Cloning into 'gaogao-book-tutrial'...
  > fatal: protocol 'git@github.private:https' is not supported
  > **失敗**

  > $ git clone git@github.private:/github.com/StartdashHitokage96/gaogao-book-tutrial.git  
  > Cloning into 'gaogao-book-tutrial'...
  > fatal: remote error:
  > github.com/StartdashHitokage96/gaogao-book-tutrial is not a valid repository name
  > Visit https://support.github.com/ for help
  > **失敗**

  > $ git clone github.private:StartdashHitokage96/gaogao-book-tutrial.git
  > Cloning into 'gaogao-book-tutrial'...
  > remote: Enumerating objects: 4, done.
  > remote: Counting objects: 100% (4/4), done.
  > remote: Compressing objects: 100% (4/4), done.
  > remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
  > Receiving objects: 100% (4/4), done.
  > **成功**

- [わくわく Bank](https://www.wakuwakubank.com/posts/380-git-multiple-account/)
  - アカウントを使い分けて clone を実行の git clone github.com-private:username/repo.git の**github.com-private**の部分をつけたら push が成功した。
- [NOBODY:PLACE
  ](https://nplll.com/2022/10/multiple-github-accounts-windows/#3_sshconfig)
  - 6. リポジトリを clone も参考にした。git 公式にも書いていたが、同じ形のはなく[サムライエンジニア](https://www.sejuku.net/blog/71436)の通信方式と実例の段の説明と同じ理屈だと思われるが・・・
