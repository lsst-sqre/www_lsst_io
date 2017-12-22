.PHONY: help server

help:
	@echo "Run these commands in separate shells:"
	@echo "  make server      (start the Flask app)"

server:
	FLASK_APP=wwwlsstio:app flask run
