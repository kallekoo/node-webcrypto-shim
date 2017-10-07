const tape = require('tape')
const crypto = require('../crypto.js')

tape('basic', t => {
  crypto.subtle.digest({name: 'SHA-1'}, new Uint8Array([1, 2, 3, 4])).then(function (hash) {
    // returns the hash as an ArrayBuffer
    console.log(new Uint8Array(hash))
    t.end()
  })
})
