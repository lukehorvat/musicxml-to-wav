"use strict";

var fs = require("fs");
var wav = require("wav");
var xml2pcm = require("musicxml-to-pcm");

module.exports.convert = function(srcFile, destFile) {
  var bitsPerSample = 16; // A 16-bit integer will represent each sample.
  var samplesPerSecond = 44100;

  return xml2pcm
  .newStream(fs.readFileSync(srcFile, "utf8"), bitsPerSample, samplesPerSecond)
  .pipe(new wav.Writer({ channels: 1, bitDepth: bitsPerSample, sampleRate: samplesPerSecond }))
  .pipe(fs.createWriteStream(destFile));
};
