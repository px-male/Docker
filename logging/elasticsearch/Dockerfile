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
COPY ./etc/elasticsearch/elasticsearch.repo /etc/yum.repos.d/
COPY ./etc/elasticsearch/logstash.repo /etc/yum.repos.d/
RUN rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
RUN yum -y install elasticsearch 
RUN yum -y install logstash

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

RUN sed -i -e 's/#bootstrap.memory_lock: true/bootstrap.memory_lock: true/' /etc/elasticsearch/elasticsearch.yml    
RUN sed -i -e 's/#network.host: 192.168.0.1/network.host: 0.0.0.0/' /etc/elasticsearch/elasticsearch.yml    
RUN sed -i -e 's/#http.port: 9200/http.port: 9200/' /etc/elasticsearch/elasticsearch.yml    
RUN sed -i -e 's/#discovery.seed_hosts: \["host1", "host2"\]/discovery.seed_hosts: ["127.0.0.1", "[::1]"]/' /etc/elasticsearch/elasticsearch.yml    
RUN sed -i -e 's/#cluster.name: my-application/cluster.name: elastic-cluster/' /etc/elasticsearch/elasticsearch.yml
RUN sed -i -e 's/#node.name: node-1/node.name: elasticsearch/' /etc/elasticsearch/elasticsearch.yml
RUN sed -i -e 's/#cluster.initial_master_nodes: \["node-1", "node-2"\]/cluster.initial_master_nodes: ["elasticsearch"]/' /etc/elasticsearch/elasticsearch.yml

#   add logstash configfile
ADD ./etc/logstash/logstash.conf /etc/logstash/conf.d/logstash.conf


# FOREGROUND change access
CMD ["/usr/bin/ssh","-D", "FOREGROUND"]

