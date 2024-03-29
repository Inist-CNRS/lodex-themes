#!/usr/bin/env bash

NAME_PACKAGE=$(basename "$1")
LAST_VERSION=$(git tag | sort -V | grep "$NAME_PACKAGE" | tail -1)
MAJOR_VERSION=$(echo "$LAST_VERSION" | cut -d@ -f2 | cut -d\. -f1)

((NEW_MAJOR_VERSION=${MAJOR_VERSION:=0}+1))
NEW_VERSION="${NAME_PACKAGE}@${NEW_MAJOR_VERSION}.0.0"

if [ -e "$1/swagger.json" ]; then
    NUMBERED_LAST_VERSION=${LAST_VERSION//$NAME_PACKAGE@/}
    NUMBERED_NEW_VERSION=${NEW_VERSION//$NAME_PACKAGE@/}
    sed -i "s/${NUMBERED_LAST_VERSION}/${NUMBERED_NEW_VERSION}/" "$1/swagger.json"
    git add "$1/swagger.json"
    git commit -m "$NEW_VERSION"
    git push
fi

git tag "${NEW_VERSION}" -m "${NEW_VERSION}"
git push --tags
echo "Nouvelle version créée: ${NEW_VERSION}"
echo "URL à utiliser: https://github.com/Inist-CNRS/lodex-themes/archive/refs/tags/${NEW_VERSION}.zip"
