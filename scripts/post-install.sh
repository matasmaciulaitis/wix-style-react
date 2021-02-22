#!/usr/bin/env bash

lerna bootstrap --no-ci

if ! is-ci; then
  echo "Welcome to the Unified Library!"
  echo ""
  echo "It seems we're running a clean install."
  echo "Please allow me to build projects for the first time..."
  echo ""

  if ! test -d packages/wix-style-react/dist; then
    echo "Building wix-style-react..."
    lerna run build --scope wix-style-react
  fi

  if ! test -d packages/wix-ui-tpa/dist; then
    echo "Building wix-ui-tpa..."
    lerna run build --scope wix-ui-tpa
  fi
fi

echo "Finished bootstrapping"
