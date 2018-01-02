.PHONY: help server scss version site

help:
	@echo "Run these commands in separate shells:"
	@echo "  make server      (start the Flask app)"
	@echo "  make scss        (compile scss)"
	@echo "  make version     (print app version)"
	@echo "  make site        (build static site for deployment)"

server:
	FLASK_DEBUG=1 WWWLSSTIO_PROFILE=dev FLASK_APP=wwwlsstio:app flask run

scss:
	gulp scss

version:
	FLASK_APP=wwwlsstio:app flask version

site:
	FLASK_APP=wwwlsstio:app flask build
