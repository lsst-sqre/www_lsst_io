"""Flask app for generating www.lsst.io.
"""

__all__ = ['__version__', 'app', 'version']

from .appfactory import create_app
from .version import get_version


__version__ = get_version()

app = create_app()


@app.cli.command()
def version():
    """Flask CLI subcommand for printing the app version.
    """
    print(get_version())
