var CSPParser = CSPParser || {};

CSPParser

CSPParser.Tokenizer = function (str) {
  this.original_ = str;
  this.position_ = 0;
};

CSPParser.Tokenizer.prototype = {
  nextHeader: function () {
    var start = this.position_;
    var current = start;
    while (current < this.original_.length()) {
      if (this.original_[current] == ',') {
        
      }
    }
  },
};
