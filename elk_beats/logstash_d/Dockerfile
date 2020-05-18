FROM docker.elastic.co/logstash/logstash:6.2.3

ADD ./config/logstash.conf /usr/share/logstash/pipeline/logstash.conf
ADD ./config/sar.conf /usr/share/logstash/pipeline/sar.conf
ADD ./config/pipelines.yml /usr/share/logstash/config/pipelines.yms
