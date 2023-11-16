# Semantic Release Automated Changelog

## [2.0.1](https://github.com/AlaskaAirlines/auro-datetime/compare/v2.0.0...v2.0.1) (2023-11-16)


### Performance Improvements

* **token:** update token per new theming [#33](https://github.com/AlaskaAirlines/auro-datetime/issues/33) ([637ff49](https://github.com/AlaskaAirlines/auro-datetime/commit/637ff49c28dd986634b9a4e28e0958c71ad1eef5))

# [2.0.0](https://github.com/AlaskaAirlines/auro-datetime/compare/v1.4.0...v2.0.0) (2023-07-13)


### Performance Improvements

* **node18:** update repo [#20](https://github.com/AlaskaAirlines/auro-datetime/issues/20) [#21](https://github.com/AlaskaAirlines/auro-datetime/issues/21) [#22](https://github.com/AlaskaAirlines/auro-datetime/issues/22) [#23](https://github.com/AlaskaAirlines/auro-datetime/issues/23) ([3c39fe7](https://github.com/AlaskaAirlines/auro-datetime/commit/3c39fe7513630a6eb28f037998efebe27c92503a))


### BREAKING CHANGES

* **node18:** This commit includes an update to the namespace
of the component to @aurodesignsystem.

This is a complete upgrade to the repo to include things
like updating configs, testing, templates, etc.. See the full
list of updated files.

Changes to be committed:
new file:   .eslintrc
deleted:    .eslintrc.js
new file:   .github/CODEOWNERS
modified:   .github/CONTRIBUTING.md
deleted:    .github/ISSUE_TEMPLATE/bug_report.md
new file:   .github/ISSUE_TEMPLATE/bug_report.yml
deleted:    .github/ISSUE_TEMPLATE/dev-story.md
deleted:    .github/ISSUE_TEMPLATE/feature_request.md
new file:   .github/ISSUE_TEMPLATE/feature_request.yml
deleted:    .github/ISSUE_TEMPLATE/general-support.md
new file:   .github/ISSUE_TEMPLATE/general-support.yml
deleted:    .github/labelSettings.json
modified:   .github/settings.yml
new file:   .github/workflows/autoAssign.yml
new file:   .github/workflows/codeql.yml
modified:   .github/workflows/testPublish.yml
modified:   .gitignore
new file:   .husky/pre-commit
modified:   .npmignore
modified:   .stylelintrc
deleted:    .travis.yml
modified:   README.md
deleted:    babel.config.js
modified:   demo/index.html
deleted:    demo/sass/style.scss
modified:   docs/api.md
deleted:    index.html
modified:   index.js
deleted:    karma.conf.js
modified:   package-lock.json
modified:   package.json
renamed:    packageScripts/postinstall.js -> packageScripts/postinstall.mjs
deleted:    rollup.config.js
new file:   rollup.config.mjs
modified:   scripts/postCss.js
new file:   scripts/pre-commit.mjs
deleted:    scripts/prepForBuild.js
modified:   scripts/staticStyles-template.js
modified:   src/auro-datetime.js
deleted:    src/es5.js
modified:   src/style.scss
new file:   tsconfig.json
new file:   web-test-runner.config.mjs

# [1.4.0](https://github.com/AlaskaAirlines/auro-datetime/compare/v1.3.0...v1.4.0) (2022-10-06)


### Features

* **capitalize:** add feature to set meridiem type [#18](https://github.com/AlaskaAirlines/auro-datetime/issues/18) ([d73f94f](https://github.com/AlaskaAirlines/auro-datetime/commit/d73f94fac3c14bd1bf39de78afca930e0e031b34))

# [1.3.0](https://github.com/AlaskaAirlines/auro-datetime/compare/v1.2.0...v1.3.0) (2022-06-24)


### Features

* **time zone:** add support to parse date/time data with tz appendix ([811a1e7](https://github.com/AlaskaAirlines/auro-datetime/commit/811a1e78e546f06b0cd1cdc577462191a5484b2b))

# [1.2.0](https://github.com/AlaskaAirlines/auro-datetime/compare/v1.1.0...v1.2.0) (2021-04-13)


### Features

* complete repo migration upgrade ([3c0ce2a](https://github.com/AlaskaAirlines/auro-datetime/commit/3c0ce2a808a416c21ca8d3d6e8895b007933804a))

# [1.1.0](https://github.com/AlaskaAirlines/auro-datetime/compare/v1.0.0...v1.1.0) (2020-11-20)


### Bug Fixes

* update UTC strings that not converting correctly ([3f41b0b](https://github.com/AlaskaAirlines/auro-datetime/commit/3f41b0be278ca55fc91cc037b9612d782ed7dfea))


### Features

* add support for custom time entry ([c2b6372](https://github.com/AlaskaAirlines/auro-datetime/commit/c2b6372d576c95734d6b4dfd0e3da8f40bf16bfa))
* add utc and setdate to day, weekday, month and year ([8d4942a](https://github.com/AlaskaAirlines/auro-datetime/commit/8d4942a7166aea3acde5b6ab4416be7ea4884387))

# 1.0.0 (2020-11-05)


### Features

* build new dateTime component ([e14a032](https://github.com/AlaskaAirlines/auro-datetime/commit/e14a03208414c0d210ee723159253561debc18fd))
