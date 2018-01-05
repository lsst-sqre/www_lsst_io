"""Homepage view.
"""

from flask import render_template

from . import view_blueprint


@view_blueprint.route('/', methods=['GET'])
def get_homepage():
    """Homepage view."""
    return render_template('homepage.jinja')
