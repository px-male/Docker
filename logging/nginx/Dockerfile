FROM centos:7
ENV LC_ALL=C
# text editer install
RUN yum install -y vim
# ssh install
RUN yum -y install openssh-server
RUN yum -y install openssh-clients
# sudo install
RUN yum -y install sudo
RUN yum -y install java-1.8.0-openjdk
RUN pwd
COPY ./etc/nginx/nginx.repo /etc/yum.repos.d/
COPY ./etc/filebeat/filebeat.repo /etc/yum.repos.d/

RUN rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
RUN yum -y install nginx
RUN yum -y install filebeat
COPY ./etc/nginx/index.html /usr/share/nginx/html/
COPY ./etc/nginx/50x.html /usr/share/nginx/html/
RUN chmod 755 /usr/share/nginx/html/*

RUN sed -i -e 's/# %wheel\tALL=(ALL)\tNOPASSWD: ALL/%wheel\tALL=(ALL)\tNOPASSWD: ALL/' /etc/sudoers
RUN sed -i -e 's/%wheel\tALL=(ALL)\tALL/# %wheel\tALL=(ALL)\tALL/' /etc/sudoers
RUN visudo -c
RUN echo "root:password" | chpasswd

RUN mkdir  ~/.ssh && \
    touch  ~/.ssh/authorized_keys && \
    chmod 600  ~/.ssh/authorized_keys

RUN cd ~/.ssh && \
    ssh-keygen -t rsa -N "" -f id_rsa 
#    ssh-copy-id root@192.168.100.20

RUN cp -p ./etc/filebeat/filebeat.yml ./etc/filebeat/filebeat.yml.org
RUN cp -p ./etc/filebeat/filebeat.reference.yml ./etc/filebeat/filebeat.reference.yml.org
ADD ./etc/filebeat/filebeat.yml /etc/filebeat/filebeat.yml
ADD ./etc/filebeat/filebeat.reference.yml /etc/filebeat.filebeat.reference.yml

# FOREGROUND change access
CMD ["/usr/bin/ssh","-D", "FOREGROUND"]
