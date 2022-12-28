## using ubuntu version 20
FROM ubuntu:20.04 

ENV DEBIAN_FRONTEND=noninteractive
## first update and essential part
RUN apt-get update && apt-get upgrade
## init work directory 
# WORKDIR example/

## install ffmpeg service and add your needed other services or packages
RUN apt-get  install -y pip ffmpeg


## expose port for webserver
# EXPOSE xxxx


## you should cutomize cmd based on your configuration
CMD ["echo","done :)"]

