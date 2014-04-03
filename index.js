var FrontMatterCompiler;
var jsYaml = require('yaml-front-matter');
var marked = require('marked');

module.exports = FrontMatterCompiler = (function() {
  function FrontMatterCompiler() {};

  // Set to true if you want to convert markdown to html before JSON is outputted
  FrontMatterCompiler.prototype.precompileMarkdown = true;

  FrontMatterCompiler.prototype.modulesPrefix = 'module.exports = ';
  FrontMatterCompiler.prototype.brunchPlugin = true;
  FrontMatterCompiler.prototype.type = 'template';
  FrontMatterCompiler.prototype.extension = 'md';
  // Optional for different file extensions
  FrontMatterCompiler.prototype.pattern = /(\.(markdown|mdown|mkdn|md|mkd|mdwn|mdtxt|mdtext|text))$/;

  FrontMatterCompiler.prototype.compile = function(data, path, callback) {
    var precompile = this.precompileMarkdown;
    var extension = this.extension;
    var err, error, result;

    try {
      var compiled = jsYaml.loadFront(data);

      // Precompile if enabled and files are markdown
      if (precompile && extension === 'md') {
        compiled.__content = marked(compiled.__content);
      }

      compiled = this.modulesPrefix + JSON.stringify(compiled);
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
