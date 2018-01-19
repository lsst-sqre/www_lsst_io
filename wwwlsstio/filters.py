"""Jinja template filters.
"""

__all__ = ('register_filters',)

from urllib.parse import urlparse

import misaka


def register_filters(app):
    """Add filters to the Flask application's Jinja environment.
    """
    app.jinja_env.filters['strip_protocol'] = strip_protocol
    app.jinja_env.filters['format_schema_author_name'] \
        = format_schema_author_name
    app.jinja_env.filters['format_iso_8601_date'] = format_iso_8061_date
    app.jinja_env.filters['format_iso_8601_datetime'] \
        = format_iso_8061_datetime
    app.jinja_env.filters['markdown'] = format_markdown


def strip_protocol(url):
    """Reduce a URL to just the domain and path.

    >>> strip_protocol('https://dmtn-068.lsst.io')
    'dmtn-068.lsst.io'
    """
    parsed_url = urlparse(url)
    return parsed_url.netloc + parsed_url.path


def format_schema_author_name(author):
    """For a JSON schema.org author node into a name
    """
    if 'name' in author:
        return author['name']
    else:
        # NOTE: there may be other ways to encode a name in schema.org JSON,
        # so this function may have to be expanded to deal with those.
        return 'unknown'


def format_iso_8061_date(value):
    """Format a `datetime.datetime` into a 'YYYY-MM-DD' (ISO 8601) date string.
    """
    return value.strftime('%Y-%m-%d')


def format_iso_8061_datetime(value):
    """Format a `datetime.datetime` into a full ISO 8601 datetime string.
    """
    return value.isoformat(sep='T')


def format_markdown(content):
    """Format text Markdown/HTML content into HTML.
    """
    return misaka.html(content)
