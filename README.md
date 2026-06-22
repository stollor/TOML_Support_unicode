<div style="text-align:left"><img src="taplo-icon.png" width="128"></div>

# TOML Support Unicode

> 🤖 This project is AI-assisted development

[English](#english) | [中文](#中文)

---

<a name="english"></a>
## English

### Introduction

**TOML Support Unicode** is a VSCode extension that provides full TOML language support for **non-ASCII characters** in bare keys. This includes Chinese, Japanese, Korean, Arabic, and all other Unicode characters.

Based on [taplo](https://github.com/tamasfe/taplo) - a Rust TOML toolkit.

### Features

- ✅ Syntax highlighting for Unicode bare keys
- ✅ LSP support for non-ASCII identifiers
- ✅ Full taplo language server functionality
- ✅ Formatting, completion, and validation

### Installation

```bash
code --install-extension TOML-Support-Unicode-x.x.x.vsix
```

### Example

```toml
# Chinese keys
无 = 0
任意气 = -1
环境灵气 = 1

# Japanese keys
名前 = "太郎"
年齢 = 25

# Korean keys
이름 = "홍길동"
나이 = 30

# Mixed keys
user_名前 = "test"
配置_設定 = true
```

### Credits

- Original project: [tamasfe/taplo](https://github.com/tamasfe/taplo)
- AI assistance: MiMoCode (Xiaomi MiMo Team)

### License

MIT

---

<a name="中文"></a>
## 中文

### 简介

**TOML Support Unicode** 是一个 VSCode 扩展，为 TOML 文件中的 **非 ASCII 字符** 提供完整的语言支持。支持中文、日文、韩文、阿拉伯文等所有 Unicode 字符作为 bare key。

基于 [taplo](https://github.com/tamasfe/taplo) - 一个 Rust 编写的 TOML 工具集。

### 功能特性

- ✅ Unicode bare key 的语法高亮
- ✅ 非 ASCII 标识符的 LSP 支持
- ✅ 完整的 taplo 语言服务器功能
- ✅ 格式化、自动补全和验证

### 安装方式

```bash
code --install-extension TOML-Support-Unicode-x.x.x.vsix
```

### 示例

```toml
# 中文 key
无 = 0
任意气 = -1
环境灵气 = 1

# 日文 key
名前 = "太郎"
年齢 = 25

# 韩文 key
이름 = "홍길동"
나이 = 30

# 混合 key
user_名前 = "test"
配置_設定 = true
```

### 致谢

- 原始项目：[tamasfe/taplo](https://github.com/tamasfe/taplo)
- AI 辅助开发：MiMoCode（小米 MiMo 团队）

### 许可证

MIT

---

## Technical Details / 技术细节

### Changes from Original taplo / 相对于原版 taplo 的修改

1. **Syntax highlighting** (`toml.tmLanguage.json`):
   - Added Unicode character support in regex patterns
   
2. **Rust lexer** (`crates/taplo/src/syntax.rs`):
   - Modified `IDENT` token to accept Unicode characters
   - Pattern: `[A-Za-z0-9_\-\p{CJK}\p{CJK_Unified_Ideographs}\p{CJK_Unified_Ideographs_Extension_A}]+`

### Build / 构建

```bash
# Build WASM
cd crates/taplo-wasm
cargo build --target wasm32-unknown-unknown --features lsp --release

# Package extension
cd editors/vscode
npm install
npm run build
npx vsce package
```
