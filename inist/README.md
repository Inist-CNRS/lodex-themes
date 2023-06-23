# Lodex 12.55.2 theme INIST

  Ce répertoire contient [LODEX](https://github.com/Inist-CNRS/lodex)'s theme inist,
  dont l'**usage est exclusivement réservé à l'institution inist-cnrs** lorsqu'elle publie ou livre ses services via lodex.

```txt

├── inist
│   └── css
│       └── fonts
│   └── img
│  

```

## Documentation du theme Inist

    Cette documentation est à l'usage de :

    1. la maintenance de ce theme préparé pour la version 12.55.2 de Lodex
    2. la réalisation par les créateurs d'instance lodex pour le compte de l'inist-cnrs

## Optimisation de l'utilisation lodex theme inist

### Titre - Description

Elements créés depuis l'admin et utilisés par lodex et/ou stylés par css 

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

## settings (ezmaster) / les différents menu

#### breadcrumb

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

## Charte inist et Lodex

  Des class css sont disponibles dans inist-style.css

  //insérer class

  Des éléments lodex sont stylés selon charte INIST :

  > **remarque** ceci n'est qu'une proposition et peut-être modifié

  //inséré liste des éléments lodex colorisés ou stylés bordure couleur

## Description de custom/css/inist-styles.css

  //insérer description

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

  1. le logo version blanche du logo CNRS
  2. Deux familles d'images de fonds sont à votre disposition, repris du site inist\.fr

    - projet
    - qui

  3. icone svg lien externe pour breacrumb (inséré via css)

