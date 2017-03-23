#!/bin/bash

set -e

rm -rf ./dist

./node_modules/typescript/bin/tsc -p "tsconfig.json"
