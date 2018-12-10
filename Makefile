#/bin/bash

DKC=docker-compose

all: up install

install:
	$(DKC) exec app yarn install

up:
	$(DKC) up -d --remove-orphans --force-recreate

bash:
  $(DKC) exec app bash

start:
	$(DKC) exec app yarn start

simulator-android:
	$(DKC) exec app yarn run-android

reactotron:
	xhost local:root
	$(DKC) exec app Reactotron >> /dev/null 2>&1
