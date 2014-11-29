#!/usr/bin/env node

"use strict";

var musicXmlToWav = require("./");
var pkg = require("./package.json");
var args = process.argv.slice(2);
var xmlFile = args[0];
var wavFile = args[1];

if (args.indexOf("--help") !== -1 || !xmlFile || !wavFile) {
  console.log([
    "",
    pkg.name + " - " + pkg.description,
    "",
    "Usage:",
    "",
    "  " + pkg.name + " <xml> <wav>"
  ].join("\n"));
  return;
}

if (args.indexOf("--version") !== -1) {
  console.log(pkg.version);
  return;
}

musicXmlToWav.convert(xmlFile, wavFile).on("finish", function() {
  console.log("Successfully converted " + xmlFile + " to " + wavFile + "!");
});
