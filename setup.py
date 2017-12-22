#!/usr/bin/env python

import os
from setuptools import setup, find_packages


def read_file(filename):
    """Read a file in the package."""
    full_filename = os.path.join(
        os.path.abspath(os.path.dirname(__file__)),
        filename)
    with open(full_filename, encoding='utf-8') as f:
        content = f.read()
    return content


setup(
    name='www-lsst-io',
    description='www.lsst.io website generator',
    long_description=read_file('README.rst'),
    url='https://github.com/lsst-sqre/www_lsst_io',
    author='Association of Universities for Research in Astronomy, Inc.',
    author_email='jsick@lsst.org',
    license='MIT',
    classifiers=[
        'Development Status :: 3 - Alpha'
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'License :: OSI Approved :: MIT License',
        'Framework :: Flask',
        'Intended Audience :: Science/Research',
        'Topic :: Documentation',
    ],
    keywords='lsst lsst-the-docs',
    packages=find_packages(exclude=('tests',)),
    use_scm_version=True,
    setup_requires=[
        'setuptools-scm==1.15.6'
    ],
    install_requires=[],
    extras_require={},
    entry_points={
        'console_scripts': []
    }
)
