const express = require('express');

let link = 'https://raw.githubusercontent.com/xen0r-star/xen0r-star.github.io/main'

// import ship from '@public/assets/Ship.gltf';


if (process.env.NODE_ENV === 'local') {
    console.log("on")
} else {
    console.log("off")
}

let ship = link + '/public/assets/Ship.gltf';

const assets = {
    ship: ship,
};

export default assets;