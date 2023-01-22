extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// Rust単体で動く関数くん
#[wasm_bindgen]
pub fn add(left: i32, right: i32) -> i32 {
    left + right
}

// JS から渡されたリソースを使うくんたち
// ※ 相対パスが許可されてないので raw_module を使って Cargo.toml からのパスを書く
// https://github.com/rustwasm/wasm-bindgen/pull/1353
#[wasm_bindgen(raw_module = "/src/index.ts")]
extern {
    fn date_now() -> f64;
}

#[wasm_bindgen]
pub fn get_timestamp() -> f64 {
    date_now()
}

// Rust でサードパーティなやつを使ったやつをJSから使ってみるやつ
extern crate tinymt;

use tinymt::tinymt32;

#[wasm_bindgen]
pub fn rand() -> u32 {
    let param = tinymt32::Param {
        mat1: 0x8F7011EE,
        mat2: 0xFC78FF1F,
        tmat: 0x3793fdff,
    };
    let seed = 1;
    tinymt32::from_seed(param, seed).gen()
}

// Parcelじゃ使えなかった？型を使ってみる関数くん
#[wasm_bindgen]
pub fn sum(slice: &[i32]) -> i32 {
    slice.iter().sum()
}

#[wasm_bindgen]
pub fn twice(slice: &[i32]) -> Vec<i32> {
    slice.iter().map(|x| x * 2).collect()
}
