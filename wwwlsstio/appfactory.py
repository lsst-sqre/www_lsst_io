"""Factory for the Flask application.
"""

__all__ = ['create_app']

import os

from flask import Flask

from .config import config


def create_app(profile='production'):
    """Create and configure the Flask application.

    The application configuration profile can be changed with the
    ``WWWLSSTIO_PROFILE`` environment variable. The default configuration
    is ``production``. Other profiles are ``dev`` and ``test``.

    Returns
    -------
    app
        Flask application instance.
    """
    app = Flask(__name__)

    profile = os.getenv('WWWLSSTIO_PROFILE', profile)

    # apply configuration
    app.config.from_object(config[profile])
    config[profile].init_app(app)

    # register blueprints
    from .views import view_blueprint
    app.register_blueprint(view_blueprint, url_prefix=None)

    return app
