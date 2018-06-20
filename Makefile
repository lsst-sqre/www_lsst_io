.PHONY: help server watch scss version site deploy image travis-docker-deploy

VERSION=$(shell FLASK_APP=wwwlsstio:app flask version)

help:
	@echo "Run these commands in separate shells:"
	@echo "  make server      (run the Flask app server)"
	@echo "  make watch       (run browser-sync and refresh assets)"
	@echo "  make scss        (compile scss for production)"
	@echo "  make version     (print app version)"
	@echo "  make site        (build static site for deployment)"
	@echo "  make deploy      (deploy site to LSST the Docs)"
	@echo "  make image       (make Docker image)"
	@echo "  make travis-docker-deploy (upload the Docker image from Travis CI)"

server:
	FLASK_DEBUG=1 WWWLSSTIO_PROFILE=dev FLASK_APP=wwwlsstio:app flask run

watch:
	gulp browser-sync --env dev

scss:
	gulp scss --env prod

version:
	FLASK_APP=wwwlsstio:app flask version

site:
	FLASK_APP=wwwlsstio:app flask build

deploy:
	LTD_KEEPER_URL=https://keeper.lsst.codes LTD_MASON_PRODUCT=www LTD_MASON_BUILD=true TRAVIS_PULL_REQUEST=false TRAVIS_REPO_SLUG=lsst-sqre/ltd-mason TRAVIS_BRANCH=master ltd-mason-travis --html-dir _build

image:
	python setup.py sdist
	docker build --build-arg VERSION=$(VERSION) -t lsstsqre/wwwlsstio:build .

travis-docker-deploy:
	./bin/travis-docker-deploy.bash lsstsqre/wwwlsstio build
