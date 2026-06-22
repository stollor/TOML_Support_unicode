<div style="text-align:left"><img src="taplo-icon.png" width="128"></div>

[![Continuous integration](https://github.com/tamasfe/taplo/workflows/Continuous%20integration/badge.svg)](https://github.com/tamasfe/taplo/actions?query=workflow%3A%22Continuous+integration%22)
[![Latest Version](https://img.shields.io/crates/v/taplo.svg)](https://crates.io/crates/taplo)
[![Documentation](https://docs.rs/taplo/badge.svg)](https://docs.rs/taplo)

[**Website**](https://taplo.tamasfe.dev)

# Taplo

This is the repository for Taplo, a TOML v1.0.0 toolkit, more details on the [website](https://taplo.tamasfe.dev).


- [Taplo](#taplo)
  - [Status](#status)
  - [Contributing](#contributing)

## Status

The project is very young, so bugs and incomplete features are expected, so [any help is welcome](CONTRIBUTING.md)!

The correctness of the TOML parsing and decoding is not yet entirely guaranteed (as there is no official 1.0.0 compliance test suite yet).

## Contributing

All kinds of contributions are welcome. Make sure to read the [CONTRIBUTING.md](CONTRIBUTING.md) first!

## Chinese TOML Support

A VSCode extension that provides TOML language support with Chinese key support.

### Features

- Syntax highlighting for Chinese keys
- Auto-completion for Chinese keys
- Error checking for Chinese keys
- Full LSP support

### Installation

Install from VSCode Marketplace or install the VSIX file directly.

### Usage

Open any `.toml` file with Chinese keys and enjoy full language support.

### Configuration

The extension uses taplo as the language server. You can configure it using a `taplo.toml` file in your project root.

### License

MIT
