#!/usr/bin/env bash

# build.sh
python manage.py tailwind build
python manage.py collectstatic --noinput
