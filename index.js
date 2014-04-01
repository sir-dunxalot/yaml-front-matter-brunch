var FrontMatterCompiler;
var jsYaml = require('yaml-front-matter');

module.exports = FrontMatterCompiler = (function() {
  function FrontMatterCompiler() {};

  FrontMatterCompiler.prototype.brunchPlugin = true;
  FrontMatterCompiler.prototype.type = 'template';
  FrontMatterCompiler.prototype.extension = 'md';

  FrontMatterCompiler.prototype.compile = function(data, path, callback) {
    var compiled;

    compiled = jsYaml.loadFront(data);
    console.log(compiled);
    return compiled;
  };

  return FrontMatterCompiler;
})();
