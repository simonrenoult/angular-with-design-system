# HISTORY

[4d9d619](simonrenoult/angular-with-design-system/commit/4d9d619):

```
Create new empty workspace

$ ng new front --createApplication="false"
```

[9490dbb](simonrenoult/angular-with-design-system/commit/9490dbb):

```
Add new 'sga' application

$ ng generate application --prefix=sga --style=scss --routing=false --minimal=true sga
```

[4cc038a](simonrenoult/angular-with-design-system/commit/4cc038a):

```
Add new 'sgo' application

$ ng generate application --prefix=sgo --style=scss --routing=false --minimal=true sgo
```

[b92c4fd](simonrenoult/angular-with-design-system/commit/b92c4fd):

```
Add command to build all projects

This command is limited by the fact that projects must be built in the order
they are imported (if sga is using http-client, then http-client must be built
first). This is not automatic yet.

See https://github.com/angular/angular-cli/issues/11002
```

[95f0793](simonrenoult/angular-with-design-system/commit/95f0793):

```
Add new 'http-client' library

$ ng generate library --prefix=nexsis http-client
```

[604b04f](simonrenoult/angular-with-design-system/commit/604b04f):

```
Add 'design-system' library

$ ng generate library --prefix=nexsis design-system

And also cleaned the library from everything useless (services, components,
etc.)
```

[6ab5d50](simonrenoult/angular-with-design-system/commit/6ab5d50):

```
Add new component 'primary-button' to design-system

$ ng generate component --project=design-system primary-button
```

[8ac1d08](simonrenoult/angular-with-design-system/commit/8ac1d08):

```
Use component 'primary-button' in sga
```

[5df603c](simonrenoult/angular-with-design-system/commit/5df603c):

```
Document steps
```

[7e00365](simonrenoult/angular-with-design-system/commit/7e00365):

```
Add 'jest' as test runner in application sgo

$ npm test sgo
```
