# steam-web-api-build-url

Build the request URL for Steam Web API requests

[![Travis build status](http://img.shields.io/travis/ileri/steam-web-api-build-url.svg?style=flat)](https://travis-ci.org/ileri/steam-web-api-build-url)
[![Code Climate](https://codeclimate.com/github/ileri/steam-web-api-build-url/badges/gpa.svg)](https://codeclimate.com/github/ileri/steam-web-api-build-url)
[![Test Coverage](https://codeclimate.com/github/ileri/steam-web-api-build-url/badges/coverage.svg)](https://codeclimate.com/github/ileri/steam-web-api-build-url)
[![Dependency Status](https://david-dm.org/ileri/steam-web-api-build-url.svg)](https://david-dm.org/ileri/steam-web-api-build-url)
[![devDependency Status](https://david-dm.org/ileri/steam-web-api-build-url/dev-status.svg)](https://david-dm.org/ileri/steam-web-api-build-url#info=devDependencies)

# Installation
```bash
$ npm install --save steam-web-api-build-url babel
```

## Usage
```js
require('babel/polyfill')
var steamWebApiBuildUrl = require('steam-web-api-build-url').default

steamWebApiBuildUrl('SteamNews', 'GetNewsForApp', {
  version: 2, // optional; 1 by default
  query: {
    appid: 440,
    count: 3,
    maxlength: 300
  } // optional; empty by default
}) // https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json

steamWebApiBuildUrl('SteamUser', 'GetPlayerSummaries', {
  version: 2,
  query: {
    steamids: '76561197960435530'
  },
  key: 'XXXXXXXXXXXXXXXXXXXXXXX',
  format: 'xml'
}) // https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?steamids=76561197960435530&format=xml&key=XXXXXXXXXXXXXXXXXXXXXXX
```

## API

### default(interfaceName, methodName[, options])

#### interfaceName
The first part of the pathname; the leading I is dropped.

#### methodName
The second part of the pathname.

#### options

##### version
Optional. The version of the method to use. 1 by default.

##### key
Optional. The Steam Web API key. Certain methods don't function without it.

##### format
Optional. The format to return. JSON by default.

##### query
Optional. The remaining values of the query string.
