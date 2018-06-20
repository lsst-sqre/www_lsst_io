FROM python:3.6

MAINTAINER Jonathan Sick <jsick@lsst.org>
LABEL description="Static site generator for www.lsst.io" \
      name="lsstsqre/wwwlsstio"

# Supply on CL as --build-arg VERSION=<version> (or run `make image`).
ARG VERSION
LABEL version="$VERSION"

COPY dist/www-lsst-io-$VERSION.tar.gz .

RUN pip install --upgrade pip && \
    pip install www-lsst-io-${VERSION}.tar.gz && \
    rm www-lsst-io-$VERSION.tar.gz && \
    rm -rf /root/.cache
