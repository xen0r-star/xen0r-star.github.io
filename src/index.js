// Importation de tous les fichiers
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('@/js/', true, /\.*$/));
importAll(require.context('@/three/', true, /\.*$/));
importAll(require.context('@/style/', true, /\.*$/));