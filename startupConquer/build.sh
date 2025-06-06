#!/usr/bin/env bash

# Exit on error
set -o errexit

# Install dependencies
pip install -r requirements.txt

cd theme/static_src
npm install
cd ../../

# Build Tailwind CSS for production
python manage.py tailwind build

# Collect static files
python manage.py collectstatic --noinput

# Run DB migrations
python manage.py migrate
