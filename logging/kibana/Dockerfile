FROM centos:7
ENV LC_ALL=C
# text editer install
RUN yum install -y vim
# ssh install
RUN yum -y install openssh-server
RUN yum -y install openssh-clients
RUN yum -y install sudo
# kibana install
COPY ./etc/kibana/kibana.repo /etc/yum.repos.d/
RUN rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
RUN yum -y install kibana

# sudo install
RUN yum -y install sudo

RUN sed -i -e 's/# %wheel\tALL=(ALL)\tNOPASSWD: ALL/%wheel\tALL=(ALL)\tNOPASSWD: ALL/' /etc/sudoers
RUN sed -i -e 's/%wheel\tALL=(ALL)\tALL/# %wheel\tALL=(ALL)\tALL/' /etc/sudoers
RUN visudo -c
RUN echo "root:password" | chpasswd

RUN mkdir  ~/.ssh && \
    touch  ~/.ssh/authorized_keys && \
    chmod 600  ~/.ssh/authorized_keys

RUN sed -i -e 's/#server.host: "localhost"/erver.host: "0.0.0.0"/' /etc/kibana/kibana.yml
RUN sed -i -e 's/#server.name: "your-hostname"/server.name: "kibana"/' /etc/kibana/kibana.yml
RUN sed -i -e 's/#elasticsearch.hosts: ["http://localhost:9200"]/elasticsearch.hosts: ["http://elasticsearch:9200"]/' /etc/kibana/kibana.yml
RUN echo -e "192.168.100.10\telasticsearch" >> /etc/hosts

# FOREGROUND change access
CMD ["/usr/bin/ssh","-D", "FOREGROUND"]

