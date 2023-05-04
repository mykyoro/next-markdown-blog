---
title: "gaogao本エラー集"
date: "June 24 2021"
excerpt: "error collection"
cover_image: "/images/posts/img1.jpg"
---

---

### エラー集

$ npm run lint

> gaogao-book-tutrial@0.1.0 lint
> next lint --dir src

Failed to load config "next" to extend from.

---

eslint-config-next がないので以下でインストール

$ npm i -D eslint-config-next
