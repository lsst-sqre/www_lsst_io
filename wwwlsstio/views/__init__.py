"""View (URL routes) for www.lsst.io.
"""

__all__ = ['view_blueprint']

from flask import Blueprint


view_blueprint = Blueprint('views', __name__)

# Individual view modules
from . import homepage
