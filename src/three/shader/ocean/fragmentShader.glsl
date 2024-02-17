varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 color1;
uniform vec3 color2;
uniform float fresnelPower;

void main() {
    // Calcul de la normale et de la vue de la caméra
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vPosition - cameraPosition);

    // Calcul du coefficient de Fresnel
    float fresnel = pow(1.0 - dot(viewDir, normal), fresnelPower);

    // Utilisation du coefficient de Fresnel pour interpoler entre les couleurs
    vec3 finalColor = mix(color1, color2, fresnel);

    // Sortie de la couleur finale
    gl_FragColor = vec4(finalColor, 1.0);
}
