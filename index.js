var FrontMatterCompiler;
var jsYaml = require('yaml-front-matter');

module.exports = FrontMatterCompiler = (function() {
  function FrontMatterCompiler() {};

  FrontMatterCompiler.prototype.brunchPlugin = true;
  FrontMatterCompiler.prototype.type = 'template';
  FrontMatterCompiler.prototype.extension = 'md';
  // Optional for different file extensions
  FrontMatterCompiler.prototype.pattern = /(\.(markdown|mdown|mkdn|md|mkd|mdwn|mdtxt|mdtext|text))$/;

  FrontMatterCompiler.prototype.compile = function(data, path, callback) {
    var err, error, result;

    try {
      var compiled = jsYaml.loadFront(data);
      console.log(compiled);
      return result = compiled;
    } catch (_error) {
      err = _error;
      return error = err;
    } finally {
      callback(error, result);
    }
  };

  return FrontMatterCompiler;
})();
