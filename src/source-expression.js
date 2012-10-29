var CSPParser = CSPParser || {};

CSPParser.SourceExpression = function(txt) {
  this.txt_ = txt;
  this.parse_();
};

CSPParser.SourceExpression.prototype = {
  isSchemeOnly_: false,
  get isSchemeOnly() {
    return this.isSchemeOnly_;
  },
  isSelf_: false,
  get isSelf() {
    return this.isSelf_;
  },
  isUnsafeEval_: false,
  get isUnsafeEval() {
    return this.isUnsafeEval_;
  },
  isUnsafeInline_: false,
  get isUnsafeInline() {
    return this.isUnsafeInline_;
  },
  isWildcard_: false,
  get isWildcard() {
    return this.isWildcard_;
  },

  // scheme://host:port/path
  scheme_: '',
  get scheme() {
    return this.scheme_;
  },
  host_: '',
  get host() {
    return this.host_;
  },
  port_: 0,
  get port() {
    return this.port_;
  },
  path_: '',
  get path() {
    return this.path_;
  },

  parse_: function () {
    if (!this.txt_.length)
      return;

    if (this.txt_ === '*') {
      this.isWildcard_ = true;
      return;
    }
    if (this.txt_ === "'self'") {
      this.isSelf_ = true;
      return;
    }
    if (this.txt_ === "'unsafe-eval'") {
      this.isUnsafeEval_ = true;
      return;
    }
    if (this.txt_ === "'unsafe-inline'") {
      this.isUnsafeInline_ = true;
      return;
    }

    var current = 0;
    while (current < this.txt_.length) {
      if (this.txt_[current] === '/' || this.txt_[current] === ':')
        break;
      current++;
    }

    // host
    //     ^
    if (current == this.txt_.length) {
      this.host_ = this.txt_;
      return;
    }

    // scheme:
    //       ^
    if (current === this.txt_.length - 1 && this.txt_[current] === ':') {
      this.scheme_ = this.txt_.substr(0, current);
      this.isSchemeOnly_ = true;
      return;
    }

    // host/path || host/ || /
    //     ^            ^    ^
  },
};
