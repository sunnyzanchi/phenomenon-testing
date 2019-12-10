import Phenomenon from 'phenomenon'

import fragment from './fragment.frag'
import vertex from './vertex.vert'

let mouse = [0, 0]

document.addEventListener('mousemove', e => {
  // TODO: Get this dynamically from canvas height
  mouse = [e.clientX, -e.clientY + 1300]
})

const attributes = [
  {
    name: 'aPosition',
    data: () => [-1, -1, 0, 1, 1, -1, 1, 0],
    size: 4
  }
]

const uniforms = {
  uFrame: {
    type: 'float',
    value: 0.0
  },
  uMouse: {
    type: 'vec2',
    value: [0, 0]
  }
}

const renderer = new Phenomenon({
  canvas: document.querySelector('canvas'),
  settings: {
    clearColor: [0, 0, 0, 1],
    position: { x: 0, y: 0, z: 1.2 },
    shouldRender: true
  }
})

renderer.add('starling', {
  attributes,
  uniforms,
  vertex,
  fragment,
  onRender: instance => {
    instance.uniforms.uFrame.value += 1
    instance.uniforms.uMouse.value = mouse
  }
})
