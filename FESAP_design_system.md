# Charte graphique — FESAP
**Fraternité des Enfants de Saint Antoine de Padoue**

Document de référence extrait du dépliant institutionnel. À utiliser comme brief de design pour construire le site web de l'organisation (avec Claude ou tout autre outil).

> Note : les codes hex ci-dessous sont estimés visuellement à partir du visuel fourni (pas de fichier source/logo vectoriel disponible). Si un fichier de charte graphique officiel existe, l'utiliser en priorité pour valider ces valeurs.

---

## 1. Palette de couleurs

### Couleurs principales

| Rôle | Couleur | Hex | Usage observé |
|---|---|---|---|
| Primaire — Vert forêt | 🟢 | `#1C4B33` | Logo FESAP, titres ("Fraternité..."), icônes rondes, "SIEGE SOCIAL", bordures de badges |
| Secondaire — Brun expresso | 🟤 | `#3C2413` | Bandeau horizontal, dégradé de fond (photo St Antoine), habillage bas-droite |
| Neutre — Blanc cassé / crème | ⚪ | `#FCFAF7` | Fond principal de la page |
| Neutre — Noir / anthracite | ⚫ | `#1A1A1A` | Texte courant, numéros de téléphone |
| Accent — Cuivre / bronze | 🟠 | `#B8804A` | Texte "Santo Antônio" (effet métallique dégradé) |

### Couleurs du logo (médaillon)

| Rôle | Hex | Usage |
|---|---|---|
| Flamme orange | `#E8622E` | Flamme de l'Esprit Saint dans le logo |
| Flamme rouge-brûlé | `#C73E1D` | Dégradé bas de la flamme |
| Vert du contour | `#1C4B33` | Anneau extérieur, cohérent avec le vert primaire |
| Blanc | `#FFFFFF` | Colombe, texte "FESAP" |

### Icônes de réseaux sociaux (couleurs de marque standard — ne pas modifier)

| Réseau | Hex |
|---|---|
| WhatsApp | `#25D366` |
| Facebook | `#1877F2` |
| YouTube | `#FF0000` |
| TikTok | `#000000` |
| Gmail | multicolore (logo officiel) |

### Suggestion d'usage pour le site web

```css
:root {
  /* Couleurs de marque */
  --color-primary: #1C4B33;       /* vert forêt — nav, titres, boutons principaux */
  --color-primary-dark: #123423;  /* variante hover/pressed */
  --color-secondary: #3C2413;     /* brun expresso — bandeaux, footer, fonds sombres */
  --color-accent: #B8804A;        /* cuivre/bronze — mise en avant, citations, liens décoratifs */
  --color-flame: #E8622E;         /* orange flamme — accents ponctuels, CTA secondaires */

  /* Neutres */
  --color-bg: #FCFAF7;            /* fond principal */
  --color-surface: #FFFFFF;       /* cartes, encarts */
  --color-text: #1A1A1A;          /* texte principal */
  --color-text-muted: #5C5652;    /* texte secondaire */
  --color-border: #E4DFD8;        /* séparateurs discrets */

  /* Réseaux sociaux */
  --color-whatsapp: #25D366;
  --color-facebook: #1877F2;
  --color-youtube: #FF0000;
}
```

---

## 2. Typographie

| Élément | Style observé | Suggestion Google Fonts (libre, proche visuellement) |
|---|---|---|
| Titres principaux ("Fraternité des Enfants...") | Serif bold / display, empattements marqués, très affirmé | **Playfair Display** (700/900) ou **Cinzel** |
| Sous-titres / labels ("SIEGE SOCIAL") | Sans-serif gras, majuscules, espacement large | **Montserrat** (700) ou **Poppins** (700) |
| Texte courant (paragraphes) | Sans-serif simple, lisible | **Inter** ou **Open Sans** (400/500) |
| Élément décoratif ("Santo Antônio") | Script/calligraphié doré, usage ponctuel uniquement (image, pas texte web) | **Alex Brush** ou **Playfair Display Italic** — à réserver à des visuels/bannières, pas au corps du site |

```css
:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', 'Open Sans', sans-serif;
}
```

---

## 3. Logo et identité

- Logo circulaire : anneau vert foncé, fond blanc, inscription circulaire "FRATERNITÉ LES ENFANTS DE SAINT ANTOINE DE PADOUE" en haut de l'anneau.
- Élément central : une colombe blanche au-dessus d'une flamme orange/rouge, surmontant une croix, le tout au-dessus d'un livre ouvert stylisé — symboles de l'Esprit Saint, de la foi et de la Parole.
- Le mot "FESAP" apparaît en grosses lettres blanches sur fond vert en bas du médaillon.
- Le logo doit toujours reposer sur un fond clair (blanc ou crème) pour rester lisible.

**Usage web recommandé** : logo dans le header (taille ~48–64px), version simplifiée (sans le texte circulaire) possible pour le favicon.

---

## 4. Iconographie

- Icônes rondes pleines, fond vert forêt uni (`#1C4B33`), pictogramme blanc en trait fin (style *outline*, ex. icône "maison" pour "Siège social").
- Icônes de réseaux sociaux : cercles blancs avec logo officiel coloré à l'intérieur (style badge).
- Recommandation pour le site : utiliser une bibliothèque cohérente comme **Lucide** ou **Heroicons** (style outline), recolorées en vert forêt sur fond blanc ou blanc sur fond vert, pour rester fidèle au dépliant.

---

## 5. Photographie et imagerie

- Photos de groupe (membres en tenue commune : polos verts/blancs, ou T-shirts noirs personnalisés) — ton chaleureux, communautaire, authentique (non posé studio).
- Portrait/illustration religieuse (Saint Antoine de Padoue) avec traitement artistique sépia/brun sur fond dégradé sombre — à réserver à une section "Histoire / Spiritualité" plutôt qu'en photo générique.
- Les photos sont disposées en blocs rectangulaires, parfois avec un léger dégradé brun en bas de l'image pour la transition vers le footer.

---

## 6. Mise en page observée

- Structure en colonnes : bande sombre à gauche (image/ambiance), zone blanche centrale/droite (contenu informatif + logo), bloc photos à l'extrême droite.
- Bandeau horizontal brun foncé traversant la largeur, utilisé comme séparateur visuel fort entre le haut (logos/icônes) et le bas (contenu).
- Titres en vert, très grands, alignés à gauche dans leur bloc.
- Liste de contacts avec icône + texte, alignement vertical régulier, bonne respiration entre les lignes.

**Transposition site web** :
- Header blanc avec logo à droite ou centré, nav en vert forêt.
- Hero section possible avec bandeau brun foncé texte clair, ou image de fond avec overlay brun/vert.
- Section "Contact" reprenant le pattern icône-ronde + texte du dépliant.
- Footer en brun expresso foncé (`#3C2413`) avec texte crème, cohérent avec le bandeau du dépliant.

---

## 7. Informations de contact extraites

- **WhatsApp** : +226 55 74 77 72 / +1 514 261 7129
- **Email** : Fesap2023@gmail.com
- **Réseaux sociaux** : Facebook (FESAP), TikTok (FESAP), YouTube (FESAP TV)
- **Siège social** : Maison communautaire, paroisse de Dassasgho, archidiocèse de Ouagadougou (Burkina Faso). Communautés également présentes dans le diocèse de Banfora (paroisse du Très Saint Sacrement de Bounouna).

---

## 8. Brief prêt à l'emploi pour Claude (construction du site)

Copier-coller ce bloc en début de conversation avec Claude pour générer le site avec la bonne identité visuelle :

```
Construis un site web pour la FESAP (Fraternité des Enfants de Saint Antoine de Padoue),
une communauté catholique basée au Burkina Faso (Ouagadougou et Banfora).

Charte graphique à respecter strictement :
- Couleur primaire (vert forêt) : #1C4B33
- Couleur secondaire (brun expresso) : #3C2413
- Accent cuivre/bronze : #B8804A
- Fond principal : #FCFAF7 (blanc cassé)
- Texte : #1A1A1A

Typographie :
- Titres : Playfair Display (bold/black), style solennel
- Labels/sous-titres : Montserrat bold, majuscules
- Corps de texte : Inter ou Open Sans

Style : sobre, institutionnel, chaleureux, à connotation spirituelle/religieuse,
inspiré d'un dépliant existant avec bandeaux bruns, icônes rondes vertes en outline,
et photos de communauté.

Sections attendues : Accueil (présentation + logo), Notre histoire / Spiritualité
(Saint Antoine de Padoue), Nos communautés (Ouagadougou/Dassasgho, Banfora/Bounouna),
Activités & apostolats, Galerie photos, Contact (WhatsApp, email, réseaux sociaux).
```

---

*Fichier généré à partir de l'analyse visuelle du dépliant FESAP fourni. Pour une exactitude parfaite des couleurs, fournir le fichier logo original en vectoriel (.ai/.svg) ou la charte graphique officielle si disponible.*
