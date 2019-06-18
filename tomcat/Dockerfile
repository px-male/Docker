FROM centos:7
RUN yum install -y java
RUN yum install -y wget
# ADD files/apache-tomcat-9.0.21.tar.gz /opt/
RUN cd /opt/ &&\
    wget http://www-eu.apache.org/dist/tomcat/tomcat-9/v9.0.21/bin/apache-tomcat-9.0.21.tar.gz     &&\
    tar -xvf apache-tomcat-9.0.21.tar.gz
# RUN ：ビルド時にコンテナ内で実行される
CMD [ "/opt/apache-tomcat-9.0.21/bin/catalina.sh", "run" ]
# CMD：完成したイメージからコンテナを作成するときに実行される
