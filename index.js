'use strict'

const crypto = require('crypto')

module.exports = {
  hash: (input) => {
    const hashCipher = crypto.createHash('sha256')
    hashCipher.update(input, 'utf8')
    return hashCipher.digest('hex')
  },
}