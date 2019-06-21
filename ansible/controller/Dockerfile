FROM centos:7
ENV LC_ALL=C
# text editer install
RUN yum install -y vim
# ssh install
RUN yum -y install openssh-server
RUN yum -y install openssh-clients
# sudo install
RUN yum -y install sudo
RUN yum -y install ansible

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

RUN mkdir /ansible && \
    cd /ansible && \
    mkdir inventory && \
    cd inventory && \
    echo -e "[targets]\n192.168.100.20" > hosts

    
# FOREGROUND change access
CMD ["/usr/bin/ssh","-D", "FOREGROUND"]

