precision mediump float;

float rand(vec2 co) {
  return fract(
    sin(
      dot(co.xy, vec2(12.9898, 78.233)
          )
        )
      * 43758.5453
      );
}

uniform vec2 uMouse;
uniform float uFrame;
varying vec2 pixel;

void main() {
  float x = gl_FragCoord.x;
  float y = gl_FragCoord.y;

  float mx = mouse.x;
  float my = mouse.y;

  float col = (
    1.0 / pow(sqrt(pow(mx - x, 2.0) + pow(my - y, 2.0)), .38)
  ) - rand(vec2(x, y) + frame / 240.0) / 10.0;

  float darker = col - 0.045;

  gl_FragColor = vec4(darker, darker, col, 1.0);
}