# Front

Modular Angular application including a design-system.

Based on Angular workspaces using applications and libraries.

## Start

    npm start sgo -- --port=1337 # http-client and design-system must have been built first
    npm start sga -- --port=1338 # http-client and design-system must have been built first

## Build

    npm run build:all

## Tree

```
├── angular.json
├── dist
│   ├── design-system
│   ├── http-client
│   ├── sga
│   └── sgo
├── bin
│   └── build
├── package.json
└── projects
    ├── design-system
    │   ├── package.json
    │   └── src
    │       └── lib
    │           ├── design-system.module.ts
    │           └── primary-button
    │               ├── primary-button.component.html
    │               ├── primary-button.component.scss
    │               ├── primary-button.component.spec.ts
    │               └── primary-button.component.ts
    ├── http-client
    │   ├── package.json
    │   └── src/...
    ├── sga
    │   └── src/...
    └── sgo
        └── src/...
```

## Steps

See [HISTORY.md](https://github.com/simonrenoult/angular-with-design-system/blob/master/HISTORY.md)
