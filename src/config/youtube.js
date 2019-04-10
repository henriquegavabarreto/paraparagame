const YTPlayer = require('yt-player')

var config = {
  modestBranding: false,
  controls: true,
  info: true,
  related: true
}

module.exports = new YTPlayer('#player', config)
