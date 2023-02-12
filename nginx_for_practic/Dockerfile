FROM nginx:1.23.1
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y procps nano  
# in this image nginx config set on "/etc/nginx/" may be on "/usr/local/nginx/conf, /etc/nginx, or /usr/local/etc/nginx."
RUN mkdir -p /data/images && mkdir -p /data/www
COPY ./images/ /data/images
COPY ./www/ /data/www
COPY ./nginx.conf /etc/nginx/