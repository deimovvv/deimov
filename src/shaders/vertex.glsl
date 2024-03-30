precision mediump float;


varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;


void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position * 1.7;
   
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
}


