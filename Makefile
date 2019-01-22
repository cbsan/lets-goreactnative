#/bin/bash

DOCKER=docker-compose

ifeq (,$(wildcard /.dockerenv))
	DOCKER_EXEC=$(DOCKER) exec app
endif

all: up install

up:
	$(DOCKER) up -d --remove-orphans --force-recreate

down:
	$(DOCKER) down

ps:
	$(DOCKER) ps

install:
	$(DOCKER_EXEC) yarn install

start:
	$(DOCKER_EXEC) yarn start

bash:
	$(DOCKER_EXEC) bash

reactotron:
	xhost local:root
	$(DOCKER) exec rctron Reactotron >> /dev/null 2>&1




