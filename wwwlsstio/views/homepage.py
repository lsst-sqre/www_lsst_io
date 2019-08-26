"""Homepage view.
"""

import datetime

from flask import render_template
import pymongo

from . import view_blueprint


@view_blueprint.route('/', methods=['GET'])
def get_homepage():
    """Homepage view."""
    from ..mongo import get_mongo

    mongo_client = get_mongo()
    collection = mongo_client['lsstprojectmeta']['resources']

    queries = {
        'SQR': {'data.reportNumber': {'$regex': r'^SQR-'}},
        'DMTN': {'data.reportNumber': {'$regex': r'^DMTN-'}},
        'SMTN': {'data.reportNumber': {'$regex': r'^SMTN-'}},
        'LDM': {'data.reportNumber': {'$regex': r'^LDM-'}},
        'LSE': {'data.reportNumber': {'$regex': r'^LSE-'}},
        'LPM': {'data.reportNumber': {'$regex': r'^LPM-'}},
        'DMTR': {'data.reportNumber': {'$regex': r'^DMTR-'}},
        'PSTN': {'data.reportNumber': {'$regex': r'^PSTN-'}},
        'TSTN': {'data.reportNumber': {'$regex': r'^TSTN-'}},
        'SITCOMTN': {'data.reportNumber': {'$regex': r'^SITCOMTN-'}},
    }

    datasets = {}
    for series, query in queries.items():
        cursor = collection.find(query)\
            .sort('data.reportNumber', pymongo.DESCENDING)
        datasets[series] = [doc['data'] for doc in cursor]
        print('Series {0} {1:d} docs'.format(series, len(datasets[series])))

        # Resort by the number
        datasets[series] = sorted(
            datasets[series],
            key=lambda x: int(x['reportNumber'].split('-')[-1]),
            reverse=True
        )

    date = datetime.datetime.now()
    date_updated = '{month} {day:d}, {year:d}'.format(
        month=date.strftime('%B'),
        day=date.day,
        year=date.year)

    return render_template(
        'homepage.jinja', datasets=datasets,
        date_updated=date_updated)
