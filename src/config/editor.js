var editorConfig = {
  status: false,
  areaSelect: false,
  creatingMove: false,
  changingMove: false,
  shortCuts: {
    play: 'p',
    slower: ',',
    faster: '.',
    nextQuarterBeat: 'ArrowDown',
    previousQuarterBeat: 'ArrowUp',
    nextBeat: 'ArrowRight',
    previousBeat: 'ArrowLeft',
    leftHand: 'z',
    rightHand: 'x',
    copy: 'c',
    paste: 'v'
  },
  keyStatus: {
    zPressed: false,
    xPressed: false
  },
  beatArray: [],
  selectedCircles: [],
  selectedHand: '',
  copySelection: [],
  adjustments: {
    numbers: 4
  }
}

module.exports = editorConfig
