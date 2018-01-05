"""Flask app for generating www.lsst.io.
"""

__all__ = ['__version__', 'app', 'version']

from .appfactory import create_app
from .version import get_version
from .builder import build_site


__version__ = get_version()

app = create_app()


@app.cli.command()
def version():
    """Print the app version.

    (Flask CLI subcommand)
    """
    print(get_version())


@app.cli.command()
def build():
    """Build the site into static HTML.

    (Flask CLI subcommand)
    """
    build_site(app)
