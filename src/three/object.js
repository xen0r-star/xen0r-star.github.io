let link = 'https://raw.githubusercontent.com/xen0r-star/xen0r-star.github.io/main'

var shipLink = null

if (NODE_ENV === 'online') {
    shipLink = link + '/public/assets/Ship.gltf';
} else {
    shipLink = require('@public/assets/Ship.gltf');
}



const assets = {
    ship: shipLink,
};

export default assets;