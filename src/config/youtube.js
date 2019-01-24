const YTPlayer = require('yt-player')

var config = {
  timeupdateFrequency: 500,
  modestBranding: true,
  controls: false,
  info: false,
  related: false
}

module.exports = new YTPlayer('#player', config)
