module("Source Expressions");

test("Wildcard", function () {
  var e = new CSPParser.SourceExpression("*");
  ok(e.isWildcard, "'*' is a wildcard.");
  ok(!e.isSelf);
  ok(!e.isUnsafeEval);
  ok(!e.isUnsafeInline);
});

test("'self'", function () {
  var e = new CSPParser.SourceExpression("'self'");
  ok(e.isSelf, "'self' is self.");
  ok(!e.isWildcard);
  ok(!e.isUnsafeEval);
  ok(!e.isUnsafeInline);
});

test("'unsafe-eval'", function () {
  var e = new CSPParser.SourceExpression("'unsafe-eval'");
  ok(e.isUnsafeEval, "'unsafe-eval' is unsafe eval.");
  ok(!e.isSelf);
  ok(!e.isWildcard);
  ok(!e.isUnsafeInline);
});

test("'unsafe-inline'", function () {
  var e = new CSPParser.SourceExpression("'unsafe-inline'");
  ok(e.isUnsafeInline, "'unsafe-inline' is unsafe inline.");
  ok(!e.isSelf);
  ok(!e.isWildcard);
  ok(!e.isUnsafeEval);
});

test("Host-only", function () {
  var e = new CSPParser.SourceExpression("host");
  equal(e.host, "host");
  equal(e.scheme, "");
});

test("Scheme-only", function () {
  var e = new CSPParser.SourceExpression("http:");
  ok(!e.isWildcard, "'http:' is not a wildcard.");
  ok(e.isSchemeOnly, "'http:' is scheme-only.");
  equal(e.scheme, 'http', "'http:' has a scheme of 'http'.");
});
