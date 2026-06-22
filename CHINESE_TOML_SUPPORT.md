# 中文TOML支持指南

## 问题说明

原始的taplo语言服务器不支持中文字符作为bare key。我们已经修改了两个地方：

1. **语法高亮规则** (`editors/vscode/toml.tmLanguage.json`) - 已完成
2. **Rust lexer** (`crates/taplo/src/syntax.rs`) - 已完成

## 当前状态

### 已完成的修改

1. ✅ 语法高亮规则已修改，支持中文字符
2. ✅ Rust lexer已修改，支持Unicode字符
3. ✅ VSIX插件已打包并安装

### 待完成的工作

1. ❌ WASM版本的语言服务器需要重新构建（遇到Windows安全策略问题）
2. ❌ 需要发布到VSCode Marketplace

## 解决方案

### 方案1：临时禁用LSP诊断

在项目的`.vscode/settings.json`中添加以下配置：

```json
{
  "evenBetterToml.taplo.bundled": false,
  "evenBetterToml.schema.enabled": false,
  "evenBetterToml.schema.links": false,
  "evenBetterToml.semanticTokens": false,
  "evenBetterToml.syntax.semanticTokens": false
}
```

这将禁用taplo的LSP功能，只保留语法高亮。

### 方案2：使用引号包裹中文key

将中文key用引号包裹起来：

```toml
# 不推荐（会报错）
无 = 0
任意气 = -1

# 推荐（不会报错）
"无" = 0
"任意气" = -1
```

### 方案3：重新构建WASM版本

如果您有Linux或macOS环境，可以尝试重新构建WASM版本：

```bash
# 安装wasm-pack
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# 构建WASM版本
cd crates/taplo-wasm
wasm-pack build --target nodejs --features lsp --release

# 复制到VSCode扩展
cp pkg/taplo_wasm_bg.wasm ../../editors/vscode/dist/
```

## 技术细节

### 修改的文件

1. `editors/vscode/toml.tmLanguage.json` - 语法高亮规则
2. `crates/taplo/src/syntax.rs` - Rust lexer定义

### 正则表达式修改

**原始：**
```regex
[A-Za-z0-9_-]+
```

**修改后：**
```regex
[A-Za-z0-9_\-\p{CJK}\p{CJK_Unified_Ideographs}\p{CJK_Unified_Ideographs_Extension_A}]+
```

## 下一步

1. 在Linux/macOS环境中重新构建WASM版本
2. 测试完整的LSP功能
3. 发布到VSCode Marketplace

## 参考资料

- [TOML v1.0.0规范](https://toml.io/en/v1.0.0)
- [taplo文档](https://taplo.tamasfe.dev)
- [VSCode扩展开发指南](https://code.visualstudio.com/api)
