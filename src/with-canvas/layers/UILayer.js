const UILayer = {
  // create the layer
  init: (width, height) => {
    const canvas = document.createElement('canvas')
    canvas.style = "position: absolute; left: 0; top: 0; z-index: 2;"
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    const uiLayer = {
      draw: (state) => {
        // TODO: draw UI components here
      },
      attachListeners(listeners) {
        if (listeners && Array.isArray(listeners)) {
          listeners.forEach(listener => {
            canvas.addEventListener(listener.type, listener.func)
          })
        }
      
      }
    }
    return { api: uiLayer, canvas }
  }
}

export default UILayer