![image](docs/images/cover.jpg)

<div align="center">
    <b>Basic scaffolding for Angular Three projects with NgRx</b>
</div>

## Table of contents 👇

- [✨ How to install](#-how-to-install)
- [🕸️ Install dependencies](#-install-dependencies)
- [🚀 Deployment](#-deployment)

## ✨ How to install

Simply run `git clone` and then `npm install --legacy-peer-deps`.

## 🕸️ Install dependencies

- Install Angular Three with `npm install --save-dev @angular-three/schematics ` and `npx nx generate @angular-three/schematics:init`
- Install NGRX with `nnpm install @ngrx/store --save`.

If you need to install another Angular Three dependency (for example Soba) add it with `npm i @angular-three/soba --legacy-peer-deps`.

## 🚀 Deployment

The project is deployed on **Netlify**. We had some troubles during deployment, for example, we added an **environment variable** called `NPM_FLAGS` with `--legacy-peer-deps`.

You can check it out at [this link](https://angular-ngrx-threejs.netlify.app/)
