export const date_now = Date.now

// ts化した時点で num の型推論ができなくてエラーになると見たが、どうやら動くらしい
// https://wasm-dev-book.netlify.app/typescript.html
const toUint32 = num => num >>> 0

import('./wasm_dev_book_webpack').then(module => {
  const { add, get_timestamp, rand, sum, twice } = module
  console.log(add(1,2))
  console.log(get_timestamp())
  console.log(toUint32(rand()))
  // console.log(sum(new Int32Array([1,2,3,4,5])))
  console.log(sum(twice(new Int32Array([1,2,3,4,5]))))
})


