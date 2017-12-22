.PHONY: help server version

help:
	@echo "Run these commands in separate shells:"
	@echo "  make server      (start the Flask app)"
	@echo "  make version     (print app version)"

server:
	FLASK_APP=wwwlsstio:app flask run

version:
	FLASK_APP=wwwlsstio:app flask version
