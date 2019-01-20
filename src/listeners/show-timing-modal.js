let timingModal = document.getElementById('timing-modal')
let timingButton = document.getElementById('timing-button')

function toggleModal() {
  timingModal.classList.toggle("show-timing-options")
}

module.exports = timingButton.addEventListener('click', toggleModal)
