FROM docker.elastic.co/elasticsearch/elasticsearch:6.2.3

COPY ./config/elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml

# kuromojiをインストール
RUN elasticsearch-plugin  install analysis-kuromoji

# RUN elasticsearch-plugin remove x-pack

RUN chown -R 1000:1000 /usr/share/elasticsearch/data
