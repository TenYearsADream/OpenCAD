﻿#version 400
uniform sampler2D tex;
in vec2 outTex;
void main() {
    gl_FragColor = texture2D(tex, outTex);
}
