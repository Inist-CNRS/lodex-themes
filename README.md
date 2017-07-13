# Lodex themes

This repository contains [LODEX](https://github.com/Inist-CNRS/lodex)'s themes,
that is to say, HTML/CSS/JS files used to customize `lodex`'s visual theme.

Each directory contains one theme.

Examples:

```txt
├── default
├── INRA
│   └── index_files
│       └── bundles
│           └── inrafront
│               ├── fonts
│               │   ├── icomoon
│               │   └── ProximaNova
│               └── svg
├── ISTEX
│   ├── css
│   ├── fonts
│   ├── img
│   └── js
├── lodex2ThemeBleuGenerique
├── templateLodex
│   └── images
└── termino
    ├── css
    ├── img
    └── js
```

## Uploading themes to ezMaster

[ezMaster](https://github.com/Inist-CNRS/ezmaster) is an administration tool
within which you can run multiple instances of `lodex`.

You can upload a theme by manually uploading all files and directories of a
theme to `ezMaster`.

Or you can use the `upload.py` script in conjunction with the `ezMaster`'s WebDAV
URL to do it more simply.

For example, if you want to upload `ISTEX` theme to an instance of `lodex`
running in an `ezmaster`, use:

```bash
lodex-themes$ ./upload.py ISTEX dav://host.domain.org:35267/wd--lodex-instance
```

In this example, `lodex-themes` is the clone directory,
`dav://host.domain.org:35267/wd--lodex-instance` is the WebDAV URL for an
instance of `lodex` named `lodex-instance`, hosted on `host.domain.org` where
`ezmaster` is running, on port 35267. The WebDAV URL can be found in the upload window of an instance in `ezmaster`.

> **Requirements**: you need to have Python installed, and the `cadaver` package
> (in Ubuntu, a simple `sudo apt install cadaver` will install it).
