const assert = require('assert')
const crypto = require('crypto')

const gap = require('..')

describe('github-actions-publishing', function () {
  describe('#hash', function () {
    it('should require a valid input', function() {
      assert.throws(() => { gap.hash(null) }, 'null input should raise exception')
    })

    it('should return a hex string', function () {
      const randomString = crypto.randomBytes(16).toString('base64')
      assert(gap.hash(randomString).match(/^[0-9a-f]+$/), 'hash value is not a hex string')
    })

    it('should return a fixed-size hash value', function () {
      const randomA = crypto.randomBytes(0x08).toString('base64')
      const randomB = crypto.randomBytes(0xff).toString('base64')
      assert(gap.hash(randomA).length === gap.hash(randomB).length, 'hash size should not depend on input size')
    })

    it('should return the same value for the same input', function () {
      const randomA = crypto.randomBytes(0x08).toString('base64')
      const randomB = randomA.toString()
      assert(gap.hash(randomA) === gap.hash(randomB), 'hash values should match for the same input')
    })

    it('should return different values for different input', function () {
      const randomA = '123456790a'
      const randomB = '123456790b'
      assert(gap.hash(randomA) !== gap.hash(randomB), 'hash values must not match for different input')
    })
  })
})