import * as PIXI from 'pixi.js'
import { fixedGraphics } from '../../config/containers.js'
var gameConfig = require('../../config/game-config.js')
var showTimingModal = require('../../listeners/menus/show-timing-modal.js')
var showMenuModal = require('../../listeners/menus/show-menu-modal.js')
var showSongModal = require('../../listeners/menus/show-song-modal.js')

function setFixedGraphics () {
  setGuideline()

  setVideoText()

  setTimeText()

  setMenuButtons()
}

function setGuideline () {
  let guideline = PIXI.Sprite.fromImage('https://henriquegavabarreto.github.io/paraparagame/assets/guideline.png')
  guideline.x = 6
  guideline.y = 59
  guideline.scale.x = 0.95
  fixedGraphics.addChild(guideline)
}

function setVideoText () {
  var videoText = new PIXI.Text( 'Video Time:', {
    fontSize: 18,
    fontFamily: 'Arial',
    fill: '#1ec503',
    align: 'center',
    fontWeight: 500
  })

  videoText.x = gameConfig.width/2.8
  videoText.y = gameConfig.height/6
  videoText.name = 'videoText'

  videoText.cacheAsBitmap = true

  fixedGraphics.addChild(videoText)
}

function setTimeText () {
  let videoText = fixedGraphics.getChildByName('videoText')

  var timeText = new PIXI.Text( '0', {
    fontSize: 18,
    fontFamily: 'Arial',
    fill: '#1ec503',
    align: 'center',
    fontWeight: 500
  })

  timeText.x = videoText.x + videoText.width + 5
  timeText.y = videoText.y
  timeText.name = 'timeText'

  fixedGraphics.addChild(timeText)
}

function setMenuButtons () {
  let menuHeight = gameConfig.height/20
  
  let timeButton = PIXI.Sprite.fromImage('https://henriquegavabarreto.github.io/paraparagame/assets/timing.png')
  timeButton.x = gameConfig.width/2.35
  timeButton.y = menuHeight
  timeButton.name = 'timeButton'
  timeButton.interactive = true
  timeButton.buttonMode = true
  timeButton.scale.x = 0.8
  timeButton.scale.y = 0.8
  timeButton.on('mousedown', (event) => {
    showTimingModal()
  })

  let songButton = PIXI.Sprite.fromImage('https://henriquegavabarreto.github.io/paraparagame/assets/song.png')
  songButton.x = timeButton.x + 130
  songButton.y = menuHeight
  songButton.name = 'songButton'
  songButton.interactive = true
  songButton.buttonMode = true
  songButton.scale.x = 0.8
  songButton.scale.y = 0.8
  songButton.on('mousedown', (event) => {
    showSongModal()
  })

  let menuButton = PIXI.Sprite.fromImage('https://henriquegavabarreto.github.io/paraparagame/assets/menu.png')
  menuButton.x = songButton.x + 130
  menuButton.y = menuHeight
  menuButton.name = 'menuButton'
  menuButton.interactive = true
  menuButton.buttonMode = true
  menuButton.scale.x = 0.8
  menuButton.scale.y = 0.8
  menuButton.on('mousedown', (event) => {
    showMenuModal()
  })

  fixedGraphics.addChild(timeButton)
  fixedGraphics.addChild(songButton)
  fixedGraphics.addChild(menuButton)
}

export { setFixedGraphics }
