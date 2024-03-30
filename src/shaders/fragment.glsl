precision mediump float;

uniform float time;
uniform float uDisplacement;
uniform vec2 mousePosition; // Uniforme para la posición del mouse
uniform vec2 resolution; // Agrega la uniforme 'resolution'

uniform float randomFactor; // Nuevo uniforme para controlar la aleatoriedad

varying float pulse;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

// NOISE FUNCTION

float mod289(float x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 perm(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

float noise(vec3 p) {
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

float line(vec2 uv, float offset) {
    return smoothstep(
        0., 0.02 + offset * 0.6,
        abs(0.5 * (sin(uv.x * 10.) + offset * 2.))
    );
}

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

void main() {
    // Definición de colores
    /* vec3 color1 = vec3(0.6, 0.3, 0.54);
    vec3 color2 = vec3(0.01, 0.1, 0.1);
    vec3 color3 = vec3(0.244, 0.3, 0.4); */
     

     vec3 color1 = vec3(1.4,0.3,0.54);
    vec3 color2 = vec3(0.01);
    vec3 color3 = vec3(1.244,1.3,1.49);

    // Cálculo de ruido
    float n = noise(vPosition + time * 0.1);

      // Genera valores aleatorios basados en la posición y el tiempo
    float randomX = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) * 43758.5453 + time) * randomFactor);
    float randomY = fract(sin(dot(gl_FragCoord.xy, vec2(39.423, 78.545)) * 75463.2345 - time) * randomFactor);

    // Utiliza los valores aleatorios para modificar el ruido
    n += (randomX - 0.5) * 0.1; // Ajusta el factor según tus preferencias
    n += (randomY - 0.5) * 0.1; // Ajusta el factor según tus preferencias

    // Calcula la posición del fragmento en relación con la resolución
    vec2 fragPosition = gl_FragCoord.xy / resolution;

    // Calcula la distancia entre el fragmento y la posición del mouse (normalizada)
    float distanceToMouse = length(mousePosition - fragPosition);

    // Ajusta el ruido en función de la distancia al mouse
    n += distanceToMouse * 0.07; // Ajusta el factor según tus preferencias

    // Utiliza mousePosition.x para ajustar la velocidad de cambio del patrón de ruido
    float patternSpeed = mousePosition.x * 0.0001;

    // Añade el valor de mousePosition.x a 'n' para modificar el patrón de ruido
    n += patternSpeed;

    // Aplica efectos de color y patrón
    vec2 baseUV = rotate(vec2(n * .2), n * 0.2) * vPosition.xy * n;
    float bPattern = line(baseUV, 0.5);
    float sPattern = line(baseUV, 0.2) * n * 2.;

    // Calcula los colores finales
    vec3 baseColor = mix(color1, color3, bPattern);
    vec3 sbaseColor = mix(baseColor, color2, sPattern) * n * 2.0;

    // Establece el color final del fragmento
    gl_FragColor = vec4(vec3(sbaseColor), 1.0);
}