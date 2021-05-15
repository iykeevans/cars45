const Cloud = require('@google-cloud/storage');
const path = require('path')
const serviceKey = './keys.json'

const { Storage } = Cloud
const storage = new Storage({
    keyFilename: serviceKey
})

module.exports = storage