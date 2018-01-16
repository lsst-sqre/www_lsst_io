"""Homepage view.
"""

from flask import render_template
import pymongo

from . import view_blueprint


@view_blueprint.route('/', methods=['GET'])
def get_homepage():
    """Homepage view."""
    from ..mongo import get_mongo

    mongo_client = get_mongo()
    collection = mongo_client['lsstprojectmeta']['resources']
    query = {'data.reportNumber': {'$regex': r'^SQR-'}}
    cursor = collection.find(query)\
        .sort('data.reportNumber', pymongo.DESCENDING)
    data = [doc['data'] for doc in cursor]

    return render_template('homepage.jinja', data=data)
