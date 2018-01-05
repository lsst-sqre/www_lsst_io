"""Use Frozen-Flask to create the static HTML assets for the site.
"""

from flask_frozen import Freezer


def build_site(app):
    print('Building the site')
    freezer = Freezer(app)
    freezer.freeze()
    print('... finished building the site')
