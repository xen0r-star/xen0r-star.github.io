import Stats from 'stats.js'


export function start(perlinNoiseData) {
    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom

    document.getElementById('performance').appendChild(stats.dom.childNodes[0]);
    document.getElementById('performance').appendChild(stats.dom.childNodes[0]);
    document.getElementById('performance').appendChild(stats.dom.childNodes[0]);



    const canvas = document.getElementById('perlinNoise');
    const ctx = canvas.getContext('2d');

    function mapValueToColor(value, min, max) {
        const normalizedValue = (value - min) / (max - min);
        const colorValue = Math.floor(255 * normalizedValue);
        return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    }

    const minValue = Math.min(...perlinNoiseData.flat());
    const maxValue = Math.max(...perlinNoiseData.flat());

    const canvasRatioX = canvas.width / perlinNoiseData.length;
    const canvasRatioY = canvas.height / perlinNoiseData[0].length;

    for (let i = 0; i < perlinNoiseData.length; i++) {
        for (let j = 0; j < perlinNoiseData[i].length; j++) {
            const value = perlinNoiseData[i][j];
            const color = mapValueToColor(value, minValue, maxValue);
            ctx.fillStyle = color;
            ctx.fillRect(i * canvasRatioX, j * canvasRatioY, canvasRatioX, canvasRatioY);
        }
    }

    return stats
}

// CharacterPosition :Position { x:855, y:87, z:780 }
// CharacterRotation :Rotation { x:855, y:87, z:780 }
// CharacterSpeed :Speed { x:0, y:0, z:-9.81 }

// WaterPosition :Position { x:855, y:87, z:780 }
// WaterRotation :Rotation { x:855, y:87, z:780 }
// WaterSpeed :Speed { x:0, y:0, z:-9.81 } 

export function update(character, water) {
    document.getElementById('CharacterPosition').innerText = "Position " + character.id.position
    document.getElementById('CharacterRotation').innerText = "Rotation " + character.id.rotation
    document.getElementById('CharacterSpeed').innerText = "Speed " + character.velocity
    document.getElementById('WaterPosition').innerText = "Position "
    document.getElementById('WaterRotation').innerText = "Rotation "
    document.getElementById('WaterSpeed').innerText = "Speed "
    console.log(character.id.position, character.id.rotation, character.velocity)
}


document.addEventListener("keyup", function (event) {
    if (event.key === "p" || event.key === "P") {
        document.getElementById("stats").style.display = (document.getElementById("stats").style.display == "flex") ? "none" : "flex";
    }
});