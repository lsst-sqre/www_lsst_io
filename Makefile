.PHONY: help server scss version

help:
	@echo "Run these commands in separate shells:"
	@echo "  make server      (start the Flask app)"
	@echo "  make scss        (compile scss)"
	@echo "  make version     (print app version)"

server:
	FLASK_APP=wwwlsstio:app flask run

scss:
	gulp scss

version:
	FLASK_APP=wwwlsstio:app flask version
