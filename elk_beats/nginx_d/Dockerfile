FROM nginx:1.10
USER root
RUN apt update
RUN apt-get install -y vim
RUN apt-get install -y sysstat

# 有効にする
RUN sed -i 's/ENABLED="false"/ENABLED="true"/' /etc/default/sysstat

# 10分ごとを10秒ごとに変更（10分間隔の間に（前で定義）、10秒間隔で６０回書き込む）
RUN sed -i 's/debian-sa1 1 1/debian-sa1 10 60/' /etc/cron.d/sysstat
