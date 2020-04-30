const data = {
  splash: {
    backgroundColor: 'lightgreen'
  },
  start: {
    backgroundColor: 'skyblue'
  }
}

const BackgroundLayer = {
  // create the layer
  init: (width, height) => {
    const canvas = document.createElement('canvas')
    canvas.style = "position: absolute; left: 0; top: 0; z-index: 0;"
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    const backgroundLayer = {
      draw: ({ phase }) => {
        if (data[phase]) {
          const { backgroundColor } = data[phase]
          ctx.clearRect(0,0,canvas.width, canvas.height)
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0,0, canvas.width, canvas.height)
        }
      }
    }
    return { api: backgroundLayer, canvas }
  }
}

export default BackgroundLayer