"""Configuration system.
"""

__all__ = ['config']

import abc
import os


class Config(object):
    """Configuration baseclass."""

    __metaclass__ = abc.ABCMeta

    DEBUG = True

    # Basic Frozen-Flask configurations
    # https://pythonhosted.org/Frozen-Flask/#configuration
    FREEZER_DESTINATION = os.path.join(os.path.abspath(os.getcwd()), '_build')
    FREEZER_RELATIVE_URLS = True

    MONGO_URI = os.getenv('PROJECTMETA_MONGO', default=None)

    @abc.abstractclassmethod
    def init_app(cls, app):
        pass


class DevelopmentConfig(Config):
    """Local development configuration."""

    # Frozen-Flask configurations
    # https://pythonhosted.org/Frozen-Flask/#configuration
    FREEZER_IGNORE_404_NOT_FOUND = True

    @classmethod
    def init_app(cls, app):
        pass


class TestConfig(Config):
    """Pytest configuration."""

    @classmethod
    def init_app(cls, app):
        pass


class ProductionConfig(Config):
    """Production configuration."""

    DEBUG = False

    # Frozen-Flask configurations
    # https://pythonhosted.org/Frozen-Flask/#configuration
    FREEZER_BASE_URL = 'https://www.lsst.io/'

    @classmethod
    def init_app(cls, app):
        pass


config = {
    'dev': DevelopmentConfig,
    'test': TestConfig,
    'prod': ProductionConfig,
}
