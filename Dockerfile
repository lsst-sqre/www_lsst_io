# FROM node:14 as build

# RUN apt-get update
# RUN apt-get -y install libvips-dev

# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# Since oficial image is only for testing hosting built static files
# see: https://github.com/gatsbyjs/gatsby-docker/issues/25#issuecomment-626197455
# see: https://www.stoutlabs.com/blog/2019-02-05-my-docker-setup-gatsby-next/
# And following official image is legacy
# see: https://hub.docker.com/r/gatsbyjs/gatsby-dev-builds
FROM node:14-alpine3.17 as build

RUN apk add --no-cache \
    # git: gatsby new command depends on git
    git \
    # util-linux: gatsby develop calls lscpu
    # openssl, sudo: gatsby develop --https uses
    util-linux openssl sudo \
    # Node-gyp v9.1.0 requires Python3.6.0 or more:
    #   #0 58.43 gyp ERR! find Python - version is 2.7.18 - should be >=3.6.0
    #   #0 58.43 gyp ERR! find Python - THIS VERSION OF PYTHON IS NOT SUPPORTED
    python3 g++ \
    # gatsby-plugin-sharp depends on imagemin-mozjpeg,
    # imagemin-mozjpeg depends on mozjpeg,
    # mozjpeg requires compiling from source with autoreconf, automake, libtool, gcc, make, musl-dev, file, pkgconfig, nasm
    # see: https://pkgs.alpinelinux.org/contents?page=1&file=autoreconf
    # see: https://github.com/buffer/pylibemu/issues/24#issuecomment-492759639
    # see: https://github.com/maxmind/libmaxminddb/issues/9#issuecomment-30836272
    # see: https://stackoverflow.com/questions/28631817/no-acceptable-c-compiler-found-in-path/57419374#57419374
    # see: https://pkgs.alpinelinux.org/contents?branch=v3.3&name=file&arch=x86&repo=main
    # see: https://stackoverflow.com/questions/17089858/pkg-config-pkg-prog-pkg-config-command-not-found/17106579#17106579
    # see: https://github.com/alicevision/AliceVision/issues/593#issuecomment-457194176
    autoconf automake libtool gcc make musl-dev file pkgconfig nasm \
    # sharp depends on vips
    # see: https://github.com/lovell/sharp/issues/773
    # Can't resolve without vips-dev:
    #   #0 64.81 ../src/common.cc:24:10: fatal error: vips/vips8: No such file or directory
    vips vips-dev \
    && rm -fR /var/cache/apk/*

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM nginx:alpine as server
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=builder /app/public .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

COPY nginx-boot.bash /sbin/nginx-boot
RUN chmod +x /sbin/nginx-boot

RUN apk --update add nginx bash && \
    rm -fR /var/cache/apk/*

COPY --from=build /app/public /pub

CMD [ "/sbin/nginx-boot" ]
EXPOSE 80
