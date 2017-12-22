"""Configuration system.
"""

__all__ = ['config']

import abc


class Config(object):
    """Configuration baseclass."""

    __metaclass__ = abc.ABCMeta

    DEBUG = True

    @abc.abstractclassmethod
    def init_app(cls, app):
        pass


class DevelopmentConfig(Config):
    """Local development configuration."""

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

    @classmethod
    def init_app(cls, app):
        pass


config = {
    'development': DevelopmentConfig,
    'testing': TestConfig,
    'production': ProductionConfig,
}
