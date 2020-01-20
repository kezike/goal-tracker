#!/usr/bin/env bash

set -eo pipefail   # Exit immediately when any command fails
set -o nounset     # Treat unset variables as an error

docker-compose build local
docker-compose up -d local
docker-compose logs --tail=0 -f local
