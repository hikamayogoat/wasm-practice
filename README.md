# 概要
WebAssembly 開発環境構築の本
https://wasm-dev-book.netlify.app/

の主に Webpackの使用、TypeScriptの使用 について勉強したときの作業ディレクトリ。

# 詰まりポイント？

- 別に `rust-toolchain` 周りの設定はいらなかった。
- `webpack.config.js` にコメントした `experimental` の部分が必要だった。（ビルド時に指摘された）
- `#[wasm_bindgen(module = "./index")]` の記述が紹介されているけど、相対パスがサポートされていないようで `#[wasm_bindgen(raw_module = "/src/index.(t|j)s")]` にしたら動いた
  - `(t|j)` は本当にそう書いているわけでなく、"TypeScriptの使用" で書き換えたのでそう表現しているだけ
  - 経緯は `src/lib.rs` にコメントしてあるPRからチェック
