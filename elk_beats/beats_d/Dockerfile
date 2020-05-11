FROM docker.elastic.co/beats/filebeat:6.2.3

COPY ./config/filebeat.yml /usr/share/filebeat/filebeat.yml
USER root
RUN chown root:filebeat /usr/share/filebeat/filebeat.yml
USER filebeat
RUN apt update
RUN apt-get install -y vim
RUN apt-get install -y sysstat
RUN sed -i 's/ENABLED="false"/ENABLED="true"' /etc/default/sysstat
RUN sed -i 's/debian-sa1 1 1/debian-sa1 10 60/' /etc/cron.d/sysstat

