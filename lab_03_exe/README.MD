docker run -d --name dockervolume_lab_03_exc_app2 -p 3001:3000 
-v C:\dev\docker_handzone_with_yakir\docker_handzone_with_yakir\lab_03_exe\logs:/usr/src/app/logs
-e CONTAINER_ID=2 dockervolume_lab_03_exc:v.02
