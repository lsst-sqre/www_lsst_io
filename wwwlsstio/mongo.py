"""MongoDB connection management.
"""
__all__ = ['get_mongo']

from flask import g, current_app
from pymongo import MongoClient


def get_mongo():
    """Create a MongoDB client attached to the application context.
    """
    mongo_client = getattr(g, '_mongo_client', None)

    if mongo_client is None:
        uri = current_app.config['MONGO_URI']
        if uri is None:
            message = ('The PROJECTMETA_MONGO environment variable must be '
                       'set to the URI of the projecmeta database.')
            raise RuntimeError(message)
        mongo_client = MongoClient(uri)
        g._mongo_client = mongo_client

    return mongo_client


def init_mongo_teardown(app):
    """Factory for the MongoDB client teardown function.
    """

    @app.teardown_appcontext
    def teardown_mongo(exception):
        """Teardown the MongoDB client when the application shuts down.
        """
        mongo_client = getattr(g, '_mongo_client', None)
        if mongo_client is not None:
            mongo_client.close()
