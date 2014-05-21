var FrontMatterCompiler;
var jsYaml = require('yaml-front-matter');
var marked = require('marked');
var hljs = require('highlight.js');

module.exports = FrontMatterCompiler = (function() {
  function FrontMatterCompiler() {};

  // Set to true if you want to convert markdown to html before JSON is outputted
  FrontMatterCompiler.prototype.precompileMarkdown = true;
  FrontMatterCompiler.prototype.highlightCode = true;

  FrontMatterCompiler.prototype.modulesPrefix = 'module.exports = ';
  FrontMatterCompiler.prototype.brunchPlugin = true;
  FrontMatterCompiler.prototype.type = 'template';
  FrontMatterCompiler.prototype.extension = 'md';
  // Optional for different file extensions
  FrontMatterCompiler.prototype.pattern = /(\.(markdown|mdown|mkdn|md|mkd|mdwn|mdtxt|mdtext|text))$/;

  FrontMatterCompiler.prototype.compile = function(data, path, callback) {
    var err, error, result;

    if (this.highlightCode) {
      marked.setOptions({
        highlight: function (code, lang) {
          return hljs.highlight(lang, code).value;
        }
      });
    };

    try {
      var compiled = jsYaml.loadFront(data);

      // Precompile if enabled and files are markdown
      if (this.precompileMarkdown) {
        compiled.__content = marked(compiled.__content);
      }

      compiled = JSON.stringify(compiled);
      compiled = this.modulesPrefix + compiled;
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
