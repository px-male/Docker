docker build -t tomcat:1 .
docker run -it -d --name tomcat-1 -p 8081:8080 tomcat:1
