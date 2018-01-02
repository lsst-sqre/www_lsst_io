.PHONY: help server watch scss version site

help:
	@echo "Run these commands in separate shells:"
	@echo "  make server      (run the Flask app server)"
	@echo "  make watch       (run browser-sync and refresh assets)"
	@echo "  make scss        (compile scss for production)"
	@echo "  make version     (print app version)"
	@echo "  make site        (build static site for deployment)"

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
