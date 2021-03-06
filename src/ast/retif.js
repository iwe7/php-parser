/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "retif";

/**
 * Defines a short if statement that returns a value
 * @constructor RetIf
 * @extends {Statement}
 * @property {Expression} test
 * @property {Expression} trueExpr
 * @property {Expression} falseExpr
 */
module.exports = Statement.extends(KIND, function RetIf(
  test,
  trueExpr,
  falseExpr,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.trueExpr = trueExpr;
  this.falseExpr = falseExpr;
});
