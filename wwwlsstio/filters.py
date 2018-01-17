"""Jinja template filters.
"""

__all__ = ('register_filters',)

from urllib.parse import urlparse


def register_filters(app):
    """Add filters to the Flask application's Jinja environment.
    """
    app.jinja_env.filters['strip_protocol'] = strip_protocol


def strip_protocol(url):
    """Reduce a URL to just the domain and path.

    >>> strip_protocol('https://dmtn-068.lsst.io')
    'dmtn-068.lsst.io'
    """
    parsed_url = urlparse(url)
    return parsed_url.netloc + parsed_url.path
