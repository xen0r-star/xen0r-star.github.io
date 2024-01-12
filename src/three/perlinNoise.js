let grid = [];
const nodes = 4;

// Fonction permettant de générer un vecteur unitaire aléatoire
function random_unit_vector() {
    let theta = Math.random() * 2 * Math.PI;
    return { x: Math.cos(theta), y: Math.sin(theta) };
}

// Populate the grid with random unit vectors
for (let i = 0; i < nodes; i++) {
    let row = [];
    for (let j = 0; j < nodes; j++) {
        row.push(random_unit_vector());
    }
    grid.push(row);
}

// Function to calculate dot product between distance vector and gradient vector
function dot_prod_grid(x, y, vert_x, vert_y) {
    var g_vect = grid[vert_y][vert_x];
    var d_vect = { x: x - vert_x, y: y - vert_y };
    return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
}

// Smootherstep function for interpolation
function smootherstep(x) {
    return 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3;
}

// Function for linear interpolation with smootherstep
function interp(x, a, b) {
    return a + smootherstep(x) * (b - a);
}

// Perlin noise function
function perlin_get(x, y) {
    // Determine cell nodes
    let x0 = Math.floor(x);
    let x1 = x0 + 1;
    let y0 = Math.floor(y);
    let y1 = y0 + 1;

    // Calculate dot products and interpolate
    let dot00 = dot_prod_grid(x, y, x0, y0);
    let dot01 = dot_prod_grid(x, y, x0, y1);
    let dot10 = dot_prod_grid(x, y, x1, y0);
    let dot11 = dot_prod_grid(x, y, x1, y1);

    // Interpolate along x-axis
    let interp0 = interp(x - x0, dot00, dot10);
    let interp1 = interp(x - x0, dot01, dot11);

    // Interpolate along y-axis
    return interp(y - y0, interp0, interp1);
}


export function Noise(gridSize) {
    // Créer une matrice pour stocker les valeurs du bruit de Perlin
    let perlinGrid = [];
    
    // Remplir la matrice avec les valeurs du bruit de Perlin
    for (let i = 0; i < gridSize; i++) {
        let row = [];
        for (let j = 0; j < gridSize; j++) {
            // Calculer les coordonnées normalisées entre 0 et 1
            const x = i / gridSize;
            const y = j / gridSize;
    
            // Obtenir la valeur du bruit de Perlin pour les coordonnées continues
            const perlinValue = perlin_get(x, y);
    
            // Stocker la valeur dans la matrice
            row.push(perlinValue);
        }
        perlinGrid.push(row);
    }

    return perlinGrid
}