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


function roundNumber(number) {
    return Math.round(number*100)/100
}

export function update(character, water) {
    document.getElementById('CharacterPosition').innerText = `Position { x: ${roundNumber(character.id.position.x)}, y: ${roundNumber(character.id.position.y)}, z: ${roundNumber(character.id.position.z)} }`
    document.getElementById('CharacterRotation').innerText = `Rotation { x: ${roundNumber(character.id.rotation.x)}, y: ${roundNumber(character.id.rotation.y)}, z: ${roundNumber(character.id.rotation.z)} }`
    document.getElementById('CharacterSpeed').innerText = `Speed { x :${roundNumber(character.velocity.x)}, y: ${roundNumber(character.velocity.y)}, z: ${roundNumber(character.velocity.z)} }`
    document.getElementById('WaterPosition').innerText = "Position "
    document.getElementById('WaterRotation').innerText = "Rotation "
    document.getElementById('WaterSpeed').innerText = "Speed "
}


document.addEventListener("keyup", function (event) {
    if (event.key === "p" || event.key === "P") {
        document.getElementById("stats").style.display = (document.getElementById("stats").style.display == "flex") ? "none" : "flex";
    }
});