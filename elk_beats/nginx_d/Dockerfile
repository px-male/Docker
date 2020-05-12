FROM nginx:1.10
USER root
RUN apt update
RUN apt-get install -y vim
RUN apt-get install -y sysstat
# RUN sed -i -r s/ENABLED="false"/ENABLED="true" /etc/default/sysstat
# RUN sed -i 's/sa1 1 1/sa1 1 599/' /etc/cron.d/sysstat
