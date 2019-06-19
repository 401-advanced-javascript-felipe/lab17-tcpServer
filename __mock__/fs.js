'use strict';


module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ){
    cb('Invalid File');
  }
  else {
    cb(undefined, 'File Contents');
  }
};

exports.writeFile = (file, cb) => {
  if( file.match(/bad/i) ){
    cb('Invalid File');
  }
  else {
    cb(undefined, 'File Contents');
  }
};
