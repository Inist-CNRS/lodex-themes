# Lodex 12.55.2 theme INIST

  Ce répertoire contient les fichiers à installer dans le répertoire custom de [LODEX](https://github.com/Inist-CNRS/lodex)'s theme inist,
  
  **usage est exclusivement réservé à l'institution inist-cnrs** lorsqu'elle publie ou livre ses services via lodex.

```

├── inist
│   └── css
│       └── fonts
│   └── img
│ fichiers documentation
│  settings_lodex_theme_Inist.json
│  README.md

```

## Documentation du theme Inist

    Cette documentation est à l'usage de :

    1. la maintenance de ce theme préparé pour la version 12.55.2 de Lodex
    2. la réalisation par les créateurs d'instance lodex pour le compte de l'inist-cnrs

## Optimisation de l'utilisation lodex theme inist

### 1. Elements créés depuis l'admin et utilisés par lodex et/ou stylés par css 

#### Titre de l'étude

- renseigné via Admin/Affichage/Page d'accueil/page/
- création d'un nouveau champ :
  Onglet Général / valeur arbitraire / saisie du titre
  Onglet Affichage / visible format texte/titre/h1

> **Attention** ne pas indiquer de largeur !

> **conseil pour page d'accueil**
>
> - titre h1 = titre résumé de l'étude repris dans breadcrumb
> - titre h2 = titre long de l'étude

#### Description du corpus

- renseigné via Admin/Affichage/Page d'accueil/page/
- création d'un nouveau champ :
  Onglet Général / valeur arbitraire / saisie du titre
  Onglet Affichage / visible format texte/paragraphe

#### meta balise head/title

  - renseignée via Admin/Affichage/Page d'accueil/page/DATASET - Titre
  - reprise champs titre créé pour Page d'accueil

#### meta balise head/description

  - renseignée via Admin/Affichage/Page d'accueil/page/DATASET - Description
  - reprise du champ description crée pour page d'accueil

### 2.settings (ezmaster) / les différents menu

fichier settings_lodex_theme_Inist.json exemple dans custom/

### breadcrumb

  doit contenir au minimum le titre de l'étude

  > **conseil**
  >
  > 1. ajouter contact : url du formulaire de l'équipe site inist.fr
  > 2. ajouter mentions légales : url mentions légales site inist.fr

  La css prévoit l'ajout d'une icône 'lien externe' pour les urls hors de l'instance lodex

#### menu advanced
  
  Des pages statiques sont à votre disposition dans le theme :

    1. ajout possible de l'url interne pour la page methodologie\.html du theme
    2. ajout possible de l'url interne pour la page contact\.html du theme
    3. ajout possible de l'url interne pour la page documentation\.html du theme (documentation lodex)

## 3. Charte inist et Lodex

###  Des class css sont disponibles dans inist-style.css

```bash
  .bl3 {
  border-left: 3px solid #23aeff;
  padding-left: 30px;
}
.tiret::before,
.static-page h2::before,
.date::before {
  content: "—";
  padding-right: 20px;
  font-weight: bold;
}
.bb {
  border-bottom: 1px solid rgba(170, 170, 170, 0.2);
}
.bt {
  border-top: 1px solid rgba(170, 170, 170, 0.2);
}
/*fond rose*/
.bg {
  background-color: rgba(229, 229, 229, 0.17);
}
/*a "voir plus" charte inist */
a.VoirPlus {
  color: #434148;
  margin: 15px 0 15px 0;
  padding: 15px 20px;
  background-color: #fff;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border: 1px solid #23aeff;
  width: max-content;
}
a.VoirPlus:hover,
a.VoirPlus:focus {
  box-shadow: 0px 0px 0px 1px #23aeff;
}
```

###  Des éléments lodex sont stylés selon charte INIST :

  > **remarque** ceci n'est qu'une proposition et peut-être modifié

```bash
/*home label avec un tiret*/
.header-dataset-section div .property_label::before {
  content: "—";
  padding-right: 20px;
  font-weight: bold;
}
/*resource titres champs*/
div.resource .property_label {
  font-size: 1rem !important;
  border-bottom: 1px dotted rgb(224, 224, 224);
}
/*annotation bt bb bl3*/
.linked_fields {
  border-top: 1px solid rgba(170, 170, 170, 0.2) !important;
  border-left: 3px solid #23aeff !important;
  border-bottom: 1px solid rgba(170, 170, 170, 0.2) !important;
  padding-left: 30px !important;
}
.linked_fields h2 {
  border-left: none;
  margin-left: 0 !important;
}
.linked_fields a.VoirPlus {
  display: block;
  margin: 0 auto;
}
 /*ul charte inist ?*/
.resources-grid-list {
  background-color: rgba(229, 229, 229, 0.17);
}
```

## Structure de custom/css/inist-styles.css

```bash
/*lodex theme_inist 2*/
/* fonts*/
@import url("fonts-style.css");
/*class css couleurs*/
/* -> declaration dans colorsTheme.js, custom/css/ styles_aphrodite, css-loader.css*/
/*initial vert #7dbd42 devient bleu #25809a ou rgb(37, 128, 154)*/ /*#06bad6 ko contrast*/
/*green:{ primary: "#25809a",
secondary: "rgba(37, 128, 154, 1.5)",
tertiary: "rgba(37, 128, 154, .5)",
light: "rgba(37, 128, 154, .1)",
}*/
/*orange #f48022 devient fushia #da1d64 (active et focus)*/
/* hover violet reste violet #b22f90*/
@import url("styles_aphrodite.css");
/*bouton vert ‘plus de résultats' et bouton vert 'parcourir les résultats'*/
/* (deviennent bleu et bleu foncé) uniquement par class css-xxxxx rgb(31, 106, 129)*/
@import url("css-loader.css");
/*reprise de style.css lodex appel supprime*/

/* MOBILE FIRST*/
/* adaptative charte : cf site inist/inist.css*/
/*tout type media, equiv a4*/
@media (min-width: 794px) {}
```

## custom : description et usage des autres fichiers

### custom/ colorTheme.js et customTheme.js

  Nouveauté lodex 12.55 : colorTheme.js permet de déclarer les couleurs icônes et textes du lodex

  Le code de Lodex ne prend en compte ce fichier de déclaration couleur que pour certains de ses composants.
  C'est pourquoi pour la version lodex 12.55.2, des feuilles de style spécifiques surchargent les composants non pris en compte et stylables par class css.

  **remarque** le fichier customTheme.js reprend les déclarations de colorTheme.js et n'est pas à modifier

### custom/css/

        //insere liste

#### custom/css/fonts

### custom/img

  Ce répertoire contient :

  1. le logo version blanche du logo CNRS https://github.com/Inist-CNRS/lodex-themes/blob/master/inist/images/logo_cnrs_2019_blanc.svg
  2. Deux familles d'images de fonds sont à votre disposition, repris du site inist\.fr

    - projet
    - qui

  3. icone svg lien externe pour breacrumb (inséré via css)

