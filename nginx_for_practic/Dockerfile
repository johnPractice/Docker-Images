FROM nginx:1.23.1
RUN apt-get update && \
    apt-get upgrade && \
    apt-get install procps
# in this image nginx config set on "/etc/nginx/" may be on "/usr/local/nginx/conf, /etc/nginx, or /usr/local/etc/nginx."
COPY ./nginx.conf /etc/nginx/