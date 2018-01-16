"""Homepage view.
"""

import os

from flask import render_template
import yaml

from . import view_blueprint


@view_blueprint.route('/', methods=['GET'])
def get_homepage():
    """Homepage view."""
    from ..mongo import get_mongo

    demo_data_path = os.path.join(os.path.dirname(__file__),
                                  '../data/document-demo.yaml')
    with open(demo_data_path) as f:
        demo_data = yaml.load(f)

    mongo_client = get_mongo()
    collection = mongo_client['lsstprojectmeta']['resources']
    n_docs = collection.find({}).count()
    print('Queried {:d} docs'.format(n_docs))

    return render_template('homepage.jinja', data=demo_data)
