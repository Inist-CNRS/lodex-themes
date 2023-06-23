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

# Optimisation d'utilisation lodex theme inist

## le titre - la description

### meta balise head/title

- renseignée via Admin/Affichage/Page d'accueil/page/DATASET - Titre
- reprendre champs titre créé pour Page d'accueil

### meta balise head/description

- renseignée via Admin/Affichage/Page d'accueil/page/DATASET - Description
- reprende champ description crée pour page d'accueil

### Titre de l'étude

- renseigné via Admin/Affichage/Page d'accueil/page/
- création d'un nouveau champ :
  -- Onglet Général / valeur arbitraire / saisie du titre
  -- Onglet Affichage / visible format texte/titre/h1

> **Attention** ne pas indiquer de largeur !

### Description du corpus

- renseigné via Admin/Affichage/Page d'accueil/page/
- création d'un nouveau champ :
  Onglet Général / valeur arbitraire / saisie du titre
  Onglet Affichage / visible format texte/paragraphe

## settings (ezmaster) / les différents menu

### breadcrumb

doit contenir au minimum le titre de l'étude

**conseil**
exemple :

1. ajouter contact : renvoie sur le formulaire de l'équipe site inist.fr
2. ajouter mentions légales : url mentions légales site inist.fr

la css prévoit l'ajout d'une icône 'lien externe' pour les urls hors de l'instance lodex

### men**remarque**u advanced

des pages statiques sont à votre disposition dans le theme

1. ajout possible de l'url interne pour la page methodologie.html du theme
2. ajout possible de l'url interne pour la page contact.html du theme
3. ajout possible de l'url interne pour la page documentation.html du theme (documentation lodex)

## Charte inist et Lodex

Des class css sont disponibles dans inist-style.css

insérer ici

Des éléments lodex sont stylés selon charte INIST
**remarque** ceci n'est qu'une proposition et peut-être modifié

inséré liste des éléments lodex colorisés ou stylés bordure couleur

## colorTheme

[ezMaster](https://github.com/Inist-CNRS/ezmaster) is an administration tool
within which you can run multiple instances of `lodex`.

You can upload a theme by manually uploading all files and directories of a
theme to `ezMaster`.

Or you can use the `upload.py` script in conjunction with the `ezMaster`'s WebDAV
URL to do it more simply.

> **Requirements**: you need to have Python installed, and the `cadaver` package
> (in Ubuntu, a simple `sudo apt install cadaver` will install it).

For example, if you want to upload `ISTEX` theme to an instance of `lodex`
running in an `ezmaster`, use:

```bash
lodex-themes$ ./upload.py ISTEX dav://host.domain.org:35267/wd--lodex-instance
```

In this example, `lodex-themes` is the clone directory,
`dav://host.domain.org:35267/wd--lodex-instance` is the WebDAV URL for an
instance of `lodex` named `lodex-instance`, hosted on `host.domain.org` where
`ezmaster` is running, on port 35267. The WebDAV URL can be found in the upload window of an instance in `ezmaster`.
