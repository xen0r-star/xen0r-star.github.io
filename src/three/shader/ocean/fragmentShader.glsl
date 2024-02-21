#version 330 core
out vec4 FragColor;
  
in vec4 vertexColor; // Variable d'entrée identique à la sortie du vertex shader

void main()
{
    FragColor = vertexColor;
}