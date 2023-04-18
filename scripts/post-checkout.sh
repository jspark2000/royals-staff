#!/usr/bin/env bash

BASEDIR=$(dirname $(dirname $(realpath $0)))

cd $BASEDIR
pnpm install

# delete empty migration folders git has left
find $BASEDIR/prisma/migrations -empty -type d -delete

# load database url
source $BASEDIR/.env

if ! pnpm prisma migrate diff \
  --from-url $DATABASE_URL \
  --to-migrations prisma/migrations \
  --shadow-database-url $DATABASE_URL \
  --exit-code
then
  pnpm prisma migrate reset -f
fi
