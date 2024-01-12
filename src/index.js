// Importation de tous les fichiers
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('@src/js/', true, /\.*$/));
importAll(require.context('@src/three/', true, /\.*$/));
importAll(require.context('@src/style/', true, /\.*$/));

import '../public/assets/Ship.gltf'