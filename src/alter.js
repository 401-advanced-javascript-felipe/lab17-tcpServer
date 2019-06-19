'use strict';

/**
 * Helps alter the file
 * @module src/alter
 * @desc node's fs modules promisified using util
 */

module.exports = exports = {};

const fs = require('fs');
const util = require('util');


const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

/**
 * @param {Buffer} data - the contents of a file as a buffer
 */
function toUpper(data) {
  data = Buffer.from(data);
  return data.toString().toUpperCase();
}


exports.writeFile = writeFile;
exports.readFile = readFile;
exports.toUpper = toUpper;
