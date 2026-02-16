-------------------------------- NexusHub EX --------------------------------
Create Python Web Application Using Flask/Fast API
Add Health-Check Route To Your Application (Return 200, "ok")
Build Your Image Using Tag python_health_check:v0.1
Test Locally The Application (Using Port 5000)
docker build -t python_health_check:v0.1 .

Create Private Registry Nexus3 Using Docker Image - sonatype/nexus3:latest
Add Mount Binding / Volume For Persistent Data
Login The Admin Panel VIA Port 8081
Create New Repository With Name Lab5-Private-Hub Using Port 8082 - docker(hosted)
docker run -d -p 8081:8081 -p 8082:8082 --name nexus -v nexus-data:/nexus-data sonatype/nexus3

Tag Existing Image For New Repository
Push The Docker Artifact To NexusHub
Delete The Image Locally And Pull Again From NexusHub Registry
docker login localhost:8082 docker tag python_health_check:v0.1 localhost:8082/repository/lab5-private-hub:v0.1 docker push localhost:8082/repository/lab5-private-hub:v0.1 docker rmi localhost:8082/repository/lab5-private-hub:v0.1 docker pull localhost:8082/repository/lab5-private-hub:v0.1

// allowed websites // DockerHub - https://hub.docker.com/explore Flask - https://flask.palletsprojects.com/en/stable/quickstart/ Nexus3 - https://help.sonatype.com/en/sonatype-nexus-repository.html

// practice commands // docker ps / images / build / volume / run / push / pull / tag / login

cat /etc/docker/daemon.json - only if registry located in different server { "insecure-registries": ["x.x.x.x:8082"] }