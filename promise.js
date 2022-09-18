const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (value) => {
  return new Promise((resolve) => {
    const theaterResult = [];

    promiseTheaterIXX().then((data) => {
      theaterResult.push(...data);

      promiseTheaterVGC().then((data) => {
        theaterResult.push(...data);

        if (value === 'marah') {
          const marah = theaterResult.filter((item) => item.result === 'marah');

          resolve(marah.length);
        } else if (value === 'tidak marah') {
          const tidakMarah = theaterResult.filter(
            (item) => item.result === 'tidak marah'
          );

          resolve(tidakMarah.length);
        }
      });
    });
  });
};

module.exports = {
  promiseOutput,
};
