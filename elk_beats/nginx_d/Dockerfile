FROM nginx:1.10
USER root
RUN apt update
RUN apt-get install -y vim
RUN apt-get install -y sysstat
#RUN sed -i 's/ENABLED="false"/ENABLED="true"' /etc/default/sysstat
#RUN sed -i 's/debian-sa1 1 1/debian-sa1 10 60/' /etc/cron.d/sysstat
