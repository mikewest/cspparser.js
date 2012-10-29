module("Source Expressions");

test("Wildcard", function () {
  var e = CSPParser.SourceExpression("*");
  ok(e.isWildcard(), "'*' is a wildcard.");
});
