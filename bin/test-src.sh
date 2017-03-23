#!/bin/bash

set -e

./node_modules/mocha/bin/mocha "dist/**/*.spec.js"
