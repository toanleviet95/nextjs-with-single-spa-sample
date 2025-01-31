# Nextjs with Single-spa example project

This is an official starter Turborepo.

I used single-spa component from `packages/ui/src/pokemons.tsx` wrap in `<Pokemons />`

### Tech stack

- [Turborepo](https://turbo.build/repo/docs) for scaling monorepos and codebases
- [single-spa](https://single-spa.js.org/) for microfrontends in a frontend application
- [Nextjs](https://nextjs.org/) for SSR web pages

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```
