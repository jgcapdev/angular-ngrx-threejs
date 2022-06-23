![image](docs/images/cover.JPG)

<div align="center">
    <b>Basic scaffolding for Angular Three projects with NgRx</b>
</div>

## Table of contents 👇

- [✨ How to install](#-how-to-install)
- []
- - [🚀 Netlify](#-netlify)

## ✨ How to install

Simply run `git clone` and then `npm install`.

## 🚀 Netlify

The project is deployed on **Netlify**.

- Install Angular Three with `npm install --save-dev @angular-three/schematics ` and `npx nx generate @angular-three/schematics:init`
- Install NGRX with `nnpm install @ngrx/store --save`.
- If there is any error during the deployment process in Netlify use an **environment variable** called `NPM_FLAGS` with `--legacy-peer-deps`.

If you need to install another Angular Three dependency (for example Soba) add it with `npm i @angular-three/soba --legacy-peer-deps`.
