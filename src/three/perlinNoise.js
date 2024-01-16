let grid = [];
const nodes = 4;


function random_unit_vector() { // Genere vecteur unitaire aléatoire
    let theta = Math.random() * 2 * Math.PI;
    return { x: Math.cos(theta), y: Math.sin(theta) };
}


for (let i = 0; i < nodes; i++) { // Remplire grid
    let row = [];
    for (let j = 0; j < nodes; j++) {
        row.push(random_unit_vector());
    }
    grid.push(row);
}


function dot_prod_grid(x, y, vert_x, vert_y) { // Calcule produit point entre vecteur distance && vecteur gradient
    var g_vect = grid[vert_y][vert_x];
    var d_vect = { x: x - vert_x, y: y - vert_y };
    return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
}


function smootherstep(x) { // Fonction Smootherstep pour l'interpolation
    return 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3;
}


function interp(x, a, b) { // Fonction d'interpolation linéaire avec smootherstep
    return a + smootherstep(x) * (b - a);
}


function perlin_get(x, y) { // Bruit de perlin
    // Determiner les nœuds des cellules
    let x0 = Math.floor(x);
    let x1 = x0 + 1;
    let y0 = Math.floor(y);
    let y1 = y0 + 1;

    // Calculer les produits points et interpoler
    let dot00 = dot_prod_grid(x, y, x0, y0);
    let dot01 = dot_prod_grid(x, y, x0, y1);
    let dot10 = dot_prod_grid(x, y, x1, y0);
    let dot11 = dot_prod_grid(x, y, x1, y1);

    // Interpoler le long de l'axe des x
    let interp0 = interp(x - x0, dot00, dot10);
    let interp1 = interp(x - x0, dot01, dot11);

    // Interpoler le long de l'axe des y
    return interp(y - y0, interp0, interp1);
}


export function Noise(gridSizeX, gridSizeY) {
    let perlinGrid = []; // Cree matrice
    
    for (let i = 0; i < gridSizeX; i++) { // Remplie matrice
        let row = [];
        for (let j = 0; j < gridSizeY; j++) {

            // Calculer les coordonnees normalisees entre 0 et 1
            const x = i / gridSizeX;
            const y = j / gridSizeY;
    
            // Obtenir la valeur du bruit de Perlin pour les coordonnees continues
            const perlinValue = perlin_get(x, y);
    
            // Stocker la valeur dans la matrice
            row.push(perlinValue);
        }
        perlinGrid.push(row);
    }

    return perlinGrid
}