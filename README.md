# Front

Modular Angular application including a design-system.

Based on Angular workspaces using applications, libraries and [Storybook](1).

## Start

    npm start # starts sgo on port 1337, sga on port 1338, storybook on port 1339  

## Build

    npm run build

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
    │               ├── primary-button.component.stories.ts
    │               └── primary-button.component.ts
    ├── http-client
    │   ├── package.json
    │   └── src/...
    ├── sga
    │   └── src/...
    └── sgo
        └── src/...
```

## Steps

See [HISTORY.md](https://github.com/simonrenoult/angular-with-design-system/blob/master/HISTORY.md)


[1]: https://storybook.js.org/