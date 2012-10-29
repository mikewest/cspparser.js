module("Tokenizer");

test("Creation", function() {
  var t = new CSPParser.Tokenizer();
  equal(typeof t, "object", "Created a tokenizer.");
  equal(t.constructor, CSPParser.Tokenizer);
});

test("Single-word", function() {
  var t = new CSPParser.Tokenizer("script-src");
  equal(t.nextDirective(), "script-src");
});
