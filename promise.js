const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async() => {
  try{
    const promiseTheaterIXX = await promiseTheaterIXX();
    const promiseTheaterVGC = await promiseTheaterVGC();
  } catch (err){
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
