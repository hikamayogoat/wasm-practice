import * as wasm from './wasm_dev_book_webpack_bg.wasm';

/**
* @param {number} left
* @param {number} right
* @returns {number}
*/
export function add(left, right) {
    const ret = wasm.add(left, right);
    return ret;
}

/**
* @returns {number}
*/
export function get_timestamp() {
    const ret = wasm.get_timestamp();
    return ret;
}

/**
* @returns {number}
*/
export function rand() {
    const ret = wasm.rand();
    return ret >>> 0;
}

let cachedUint32Memory0 = new Uint32Array();

function getUint32Memory0() {
    if (cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Int32Array} slice
* @returns {number}
*/
export function sum(slice) {
    const ptr0 = passArray32ToWasm0(slice, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.sum(ptr0, len0);
    return ret;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function getArrayI32FromWasm0(ptr, len) {
    return getInt32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
* @param {Int32Array} slice
* @returns {Int32Array}
*/
export function twice(slice) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray32ToWasm0(slice, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.twice(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayI32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

