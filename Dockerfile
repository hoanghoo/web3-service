FROM ubuntu:18.04

EXPOSE 5000

#update ubuntu
RUN apt-get update

#install the build-essential package
RUN apt-get install build-essential -y

#install curl
RUN apt-get install curl -y
RUN apt-get install git -y

#install nodejs
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install nodejs -y

#Clone source code từ Github về thư mục hiện tại
RUN cd /home && git clone https://github.com/hoanghoo/web3-service.git


#Thiết lập thư mục hiện tại
WORKDIR /home/web3-service

#Install npm lib
RUN npm install

#====================================RUN===============================================
#start services
RUN ["chmod", "+x", "run.sh"]
ENTRYPOINT ["./run.sh"]