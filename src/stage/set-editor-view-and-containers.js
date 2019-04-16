import app from '../config/pixi.js'
import { backgroundChart, elements, circleSelection, guideNumbers, fixedGraphics, cueContainer, copyPasteSelection } from '../config/containers.js'

function setEditorViewAndContainers () {
  document.getElementById("canvas").appendChild(app.view)

  app.stage.addChild(backgroundChart)
  app.stage.addChild(elements)
  app.stage.addChild(copyPasteSelection)
  app.stage.addChild(fixedGraphics)
  app.stage.addChild(circleSelection)
  app.stage.addChild(cueContainer)
  app.stage.addChild(guideNumbers)
}

export default setEditorViewAndContainers
