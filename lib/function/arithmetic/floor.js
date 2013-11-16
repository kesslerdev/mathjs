module.exports = function (math) {
  var util = require('../../util/index'),

      Complex = require('../../type/Complex'),
      collection = require('../../type/collection'),

      isNumBool = util.number.isNumBool,
      isComplex = Complex.isComplex,
      isCollection = collection.isCollection;

  /**
   * Round a value towards minus infinity
   *
   *     floor(x)
   *
   * For matrices, the function is evaluated element wise.
   *
   * @param {Number | Boolean | Complex | Array | Matrix} x
   * @return {Number | Complex | Array | Matrix} res
   */
  math.floor = function floor(x) {
    if (arguments.length != 1) {
      throw new util.error.ArgumentsError('floor', arguments.length, 1);
    }

    if (isNumBool(x)) {
      return Math.floor(x);
    }

    if (isComplex(x)) {
      return new Complex (
          Math.floor(x.re),
          Math.floor(x.im)
      );
    }

    if (isCollection(x)) {
      return collection.deepMap(x, floor);
    }

    throw new util.error.UnsupportedTypeError('floor', x);
  };
};