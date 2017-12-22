"""Flask app for generating www.lsst.io.
"""

__all__ = ['__version__', 'app']

from .appfactory import create_app
from .version import get_version


__version__ = get_version()

app = create_app()
