const data = {
  splash: {
    text: 'Splash Screen',
    x: 10,
    y: 50,
    font: '48px serif'
  },
  start: {
    text: 'Start Screen',
    x: 10,
    y: 50,
    font: '48px serif'
  }
}

const TextLayer = {
  // create the layer
  init: (width, height) => {
    const canvas = document.createElement('canvas')
    canvas.style = "position: absolute; left: 0; top: 0; z-index: 1;"
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    const textLayer = {
      draw: ({ phase }) => {
        if (data[phase]) {
          const { text, x, y, font } = data[phase]
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.font = font
          ctx.fillText(text, x, y);
        }
      }
    }
    return { api: textLayer, canvas }
  }
}

export default TextLayer