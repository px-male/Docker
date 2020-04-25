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
COPY ./etc/nginx/nginx.repo /etc/yum.repos.d/
COPY ./etc/elasticsearch/filebeat.repo /etc/yum.repos.d/
RUN rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
RUN yum -y install nginx
RUN yum -y install filebeat

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

RUN echo -e "192.168.100.10\telasticsearch" >> /etc/hosts
RUN echo -e "192.168.100.20\tkibana" >> /etc/hosts


# FOREGROUND change access
CMD ["/usr/bin/ssh","-D", "FOREGROUND"]
