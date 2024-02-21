#version 330 core
layout (location = 0) in vec3 aPos; // La variable position a l'attribut de position 0
  
out vec4 vertexColor;             // Nous définirons la couleur dans cette variable

void main()
{
    gl_Position = vec4(aPos, 1.0); // un vec3 est utilisé pour construire un vec4
    vertexColor = vec4(0.5, 0.0, 0.0, 1.0); // Couleur rouge foncé
}