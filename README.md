# musicxml-to-wav [![NPM version](http://img.shields.io/npm/v/musicxml-to-wav.svg?style=flat-square)](https://www.npmjs.org/package/musicxml-to-wav)

Convert MusicXML to WAV.

## Installation

Install the package with NPM:

```bash
$ npm install -g musicxml-to-wav
```

The `-g` flag is recommended for easy CLI usage, but completely optional.

## Usage

Run it via the CLI:

```bash
$ musicxml-to-wav song.xml song.wav
```

Or, programmatically interact with its API:

```javascript
var musicXmlToWav = require("musicxml-to-wav");

var stream = musicXmlToWav.convert("song.xml", "song.wav");

// It's a Node.js stream, mate.
stream.on("finish", function() { console.log("Done!"); });
```

## Related

This package is mostly just a thin wrapper around [musicxml-to-pcm](https://github.com/lukehorvat/musicxml-to-pcm) and [node-wav](https://github.com/TooTallNate/node-wav).

If WAV simply isn't your thing, then perhaps try [musicxml-to-mp3](https://github.com/lukehorvat/musicxml-to-mp3) or [musicxml-to-speaker](https://github.com/lukehorvat/musicxml-to-speaker).
