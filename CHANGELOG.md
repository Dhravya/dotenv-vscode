# CHANGELOG

All notable changes to the Official Dotenv VS Code extension will be documented in this file.

## [Unreleased](https://github.com/dotenv-org/dotenv-vscode/compare/v0.21.0...master)

## 0.21.0

### Changed

* [#74](https://github.com/dotenv-org/dotenv-vscode/pull/74)
* Improved syntax highlighting for .env files
* Added more .env extensions that should auto-change the vscode langauge identifier to dotenv

## 0.20.0

### Added

* Added suport for `var_os` in Rust [#71](https://github.com/dotenv-org/dotenv-vscode/pull/71)

## 0.19.0

### Removed

* Remove support for .NET dotenv lib [#61](https://github.com/dotenv-org/dotenv-vscode/pull/61)

## 0.18.0

* Added support for rust [#64](https://github.com/dotenv-org/dotenv-vscode/pull/64)

## 0.17.0

### Added

* Added support for .NET dotenv lib [#61](https://github.com/dotenv-org/dotenv-vscode/pull/61)

## 0.16.0

### Added

* Added support for C# autocomplete and secret peeking[#59](https://github.com/dotenv-org/dotenv-vscode/pull/59)

## 0.15.0

### Added

* Added support for Java autocomplete and secret peeking[#58](https://github.com/dotenv-org/dotenv-vscode/pull/58)

## 0.14.1

### Changed

* Updated dotenv-vault to 1.13.4

## 0.14.0

### Added

* Added support for Go autocomplete and secret peeking[#57](https://github.com/dotenv-org/dotenv-vscode/pull/57)

## 0.13.0

### Added

* Added support for PHP autocomplete and secret peeking[#40](https://github.com/dotenv-org/dotenv-vscode/pull/40)

## 0.12.0

### Added

* Added support for Python autocomplete and secret peeking[#38](https://github.com/dotenv-org/dotenv-vscode/pull/38)

## 0.11.1

### Changed

* Use workspacePath to load `.env` file [#37](https://github.com/dotenv-org/dotenv-vscode/pull/37)

## 0.11.0

### Added

* Added support for Ruby autocomplete [#35](https://github.com/dotenv-org/dotenv-vscode/pull/35)

## 0.10.2

### Changed

* Various bug patches around autocloaking 🐞

## 0.10.1

### Changed

* Place ENV completion items to top of list [#32](https://github.com/dotenv-org/dotenv-vscode/pull/32)

## 0.10.0

* Added support for Ruby ENV secret peeking

## 0.9.0

### Added

* Added support for `.flaskenv` files

## 0.8.2

### Changed

* Updated Marketplace description

## 0.8.1

### Changed

* Preserve current `textMateRules`. Auto-clocking is either added or removed from the list.

## 0.8.0

### Added

* Added auto-cloaking toggle at top of .env file 🎉 ([24](https://github.com/dotenv-org/dotenv-vscode/pull/24))

## 0.7.1

### Changed

* Fixed activation event in event of opening `.env` file first ([23](https://github.com/dotenv-org/dotenv-vscode/pull/23))

## 0.7.0

### Added

* Auto-cloaking 🎉

## 0.6.1

### Changed

* Updated dotenv-vault to 1.11.2

## 0.6.0

### Added

* Icon in sidebar 🎉
* Working sidebar with buttons for added convenience 🎉
* Modal prompt before running npx dotenv-vault commands


## 0.5.5

### Added

* Added file support

## 0.5.4

### Added

* Clarified some content

## 0.5.3

### Added

* Added support for more extension types - .vault, .me

## 0.5.2

### Changed

* Refactored into helpers

### Added

* Added tests

## 0.5.1

### Changed

* Fix typescript support for hover

## 0.5.0

### Added

* Added support for vue files to have autocompletion
* Added hover support. Hover over a process.env.VARIABLE and view its vaulue set in your .env file 🎉

## 0.4.0

### Added

* Added autocompletion of process.env for .ts files and react code

## 0.3.0

### Added

* Added autocompletion of process.env by reading from local .env file

### Changed

* Support older versions of VSCode

## 0.2.1

### Changed

* README updates

## 0.2.0

### Added

* Syntax highlighting for .env* files

## 0.1.4

### Changed

* README updates

## 0.1.3

### Changed

* Updated README

## 0.1.2

### Changed

* Update banner and turn Q&A off. We will use GitHub Issues.

## 0.1.1

### Changed

* Update displayName

## 0.1.0

### Added

* Added commands:

```
login
logout
new
open
pull
push
status
versions
whoami
```

## 0.0.5

### Changed

* Updated displayName

## 0.0.4

### Changed

* Updated displayName

## 0.0.3

### Added

* Added sponsor link

## 0.0.2

### Added

* Added icon to marketplace

## 0.0.1

Initial release
