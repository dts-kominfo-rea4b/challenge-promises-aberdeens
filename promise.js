const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = new Promise((resolve,reject) => {
  if('marah'){
    promiseOutput = 4;
  }
  else if ('tidak marah'){
    promiseOutput = 2;
  }
});

module.exports = {
  promiseOutput,
};
