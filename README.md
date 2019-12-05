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
│   └── build_all_projects
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

## Steps to reproduce

[4d9d61](simonrenoult/angular-with-design-system/commit/4d9d61):

    Create new empty workspace
    
    $ ng new front --createApplication="false"

[9490db](simonrenoult/angular-with-design-system/commit/9490db):

    Add new 'sga' application
    
    $ ng generate application --prefix=sga --style=scss --routing=false --minimal=true sga

[4cc038](simonrenoult/angular-with-design-system/commit/4cc038):

    Add new 'sgo' application
    
    $ ng generate application --prefix=sgo --style=scss --routing=false --minimal=true sgo

[b92c4f](simonrenoult/angular-with-design-system/commit/b92c4f):

    Add command to build all projects
    
    This command is limited by the fact that projects must be built in the order
    they are imported (if sga is using http-client, then http-client must be built
    first). This is not automatic yet.
    
    See https://github.com/angular/angular-cli/issues/11002

[95f079](simonrenoult/angular-with-design-system/commit/95f079):

    Add new 'http-client' library
    
    $ ng generate library --prefix=nexsis http-client

[604b04](simonrenoult/angular-with-design-system/commit/604b04):

    Add 'design-system' library
    
    $ ng generate library --prefix=nexsis design-system
    
    And also cleaned the library from everything useless (services, components,
    etc.)

[6ab5d5](simonrenoult/angular-with-design-system/commit/6ab5d5):

    Add new component 'primary-button' to design-system
    
    $ ng generate component --project=design-system primary-button

[8ac1d0](simonrenoult/angular-with-design-system/commit/8ac1d0):

    Use component 'primary-button' in sga
