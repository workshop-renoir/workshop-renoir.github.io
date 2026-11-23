// Navigation précédent / suivant entre les projets du portfolio
// À inclure en fin de page : <script src="nav-projets.js"></script>

(function () {
  // === À adapter : fichier + nom affiché, dans l'ordre de navigation ===
  const projets = [
    { fichier: 'projet-01.html', nom: 'Kafé 01' },
    { fichier: 'projet-02.html', nom: 'Projet 02' },
    { fichier: 'projet-03.html', nom: 'Projet 03' },
    { fichier: 'projet-04.html', nom: 'Projet 04' },
    { fichier: 'projet-05.html', nom: 'Projet 05' },

  ];

  // Cible : <nav class="footer"> (créée en fin de body si absente)
  let nav = document.querySelector('nav.footer');
  if (!nav) {
    nav = document.createElement('nav');
    nav.className = 'footer';
    document.body.appendChild(nav);
  }

  // Page courante (gère aussi les URLs sans nom de fichier, ex. /projet-01/)
  const parties = location.pathname.split('/').filter(Boolean);
  const courant = decodeURIComponent(parties[parties.length - 1] || '');
  const index = projets.findIndex(
    (p) => p.fichier === courant || p.fichier.replace(/\.html?$/, '') === courant
  );
  if (index === -1) return; // page hors liste : on n'injecte rien

  // Boucle : le précédent du premier = le dernier, le suivant du dernier = le premier
  const prec = projets[(index - 1 + projets.length) % projets.length];
  const suiv = projets[(index + 1) % projets.length];

  nav.innerHTML = `
    <a class="prec" href="${prec.fichier}" rel="prev">&larr; ${prec.nom}</a>
    <a class="suiv" href="${suiv.fichier}" rel="next">${suiv.nom} &rarr;</a>
  `;
})();