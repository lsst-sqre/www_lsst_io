"""Flask app for generating www.lsst.io.
"""

__all__ = ['__version__']

from .version import get_version


__version__ = get_version()
