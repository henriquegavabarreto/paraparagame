var cueCheckbox = document.getElementById('cue-checkbox')

function showCue () {
  var showCueStatus = cueCheckbox.checked

  if (showCueStatus === true) {
    console.log('Showing cues on screen')
  } else {
    console.log('No cues on screen')
  }
}

var showCues = cueCheckbox.addEventListener('click', showCue)

module.exports = showCues
