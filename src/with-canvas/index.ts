import {
  BackgroundLayer,
  UILayer,
  TextLayer
} from './layers'

export interface State {
  running: boolean,
  phase: string,
  dirty: boolean,
  api: {
    dispatch (action: { key: string, value: string }): State
  }
}

export interface Layer {
  api: {
    draw: (state: State) => void
  } 
}

const DEFAULT_WIDTH = 335
const DEFAULT_HEIGHT = 312

// expand to hydrate from server (like on page refresh)
const createState = () => {
  const state = <State> {
    phase: 'splash',
  }
  const api = {
    dispatch: (action: { key: string, value: string}) => {
      const { key, value } = action
      return {
        ...state,
        [key]: value
      }
    }
  }
  return {
    api,
    ...state,
  }
}

// draws the current state of the widget to every layer.
// Layer-specific draws are "opt-in" by the layer in question
const renderWidget = (state: State, layers: Layer[]) => {
  layers.forEach( layer => layer.api.draw(state))
}  

// widget is event driven as opposed to based on a game loop
// update state, then render the UI to reflect
// state transitions, when triggered, can call relevant animation sequences
const createListeners = (state: State, layers: Layer[] ) => {
  return [
    {
      type: 'click',
      func: () => {
        if (state.phase === 'splash') {
          const nextState = state.api.dispatch({ key: 'phase', value: 'start' })
          renderWidget(nextState, layers)
        }
      }
    }
  ]
}

const initWidget = (rootElem: HTMLElement) => {
  // consolidating state updates to a singular API, to mitigate conflicting state updates
  if (rootElem) {
    // initialize widget layers 
    const backgroundLayer = BackgroundLayer.init(DEFAULT_WIDTH, DEFAULT_HEIGHT)
    const textLayer = TextLayer.init(DEFAULT_WIDTH, DEFAULT_HEIGHT)
    const uiLayer = UILayer.init(DEFAULT_WIDTH, DEFAULT_HEIGHT)
    console.log({
      backgroundLayer,
      textLayer,
      uiLayer
    })
    rootElem.appendChild(backgroundLayer.canvas)
    rootElem.appendChild(textLayer.canvas)
    rootElem.appendChild(uiLayer.canvas)
    // initialize state updating mechanism
    const state = createState()
    // create listeners
    const listeners = createListeners(state, [
      backgroundLayer,
      textLayer,
      uiLayer,
    ])
    uiLayer.api.attachListeners(listeners)
    backgroundLayer.api.draw(state)
    textLayer.api.draw(state)
    uiLayer.api.draw(state)
  }
}

const rootElem = document.getElementById('widget')
if (rootElem) {
  initWidget(rootElem)
}
