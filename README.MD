# NESTJS - REACT - MONGO

Backend in nestjs and mongo in a podman container

## BACKEND

Commands to compile the container image and the container where the backend will be located

Located in [nestjsback](./nestjsback/):

---
### GENERATE THE DEV ENVIRONMENT POD WITH KUBERNETES

To begin this project, the following steps must be followed:
- Duplicate the file [devEnvironment.yaml.example](./nestjsback/devEnvironment.yaml.example) and delete the '.example' extension 
- Change the database password in the environment variable `MONGO_INITDB_ROOT_PASSWORD` 
- Change the path of the backend volume where the project is located. (In the example: `/mnt/c/Users/.../nest-react-mongo/nestjsback`)

Once we have that, we continue with:

```sh
# GENERATE THE DEV ENVIRONMENT IMAGE WITH Containerfile
podman build -t fedoradevnestjsimg .

# GENERATE THE DEV ENVIRONMENT POD
podman play kube devEnvironment.yaml
```

---

### GENERATE THE DEV ENVIRONMENT POD MANUALLY

Another method to implement this project is to do it manually:

```sh
# GENERATE THE DEV ENVIRONMENT IMAGE WITH Containerfile
podman build -t fedoradevnestjsimg .
# POD
podman pod create \
    --name nest-react-mongo-pod
    -p 8080:3000 \
    -p 27017:27017

# BACKEND
podman run -d \
    --pod nest-react-mongo-pod
    -v mnt/c/Users/.../nest-react-mongo:/usr/src/app \
    --name nest-react-mongo-pod-nestbackend \
    fedoradevnestjsimg

# DATABASE
# IF THE VOLUME DOES NOT EXIST, WE CREATE IT
podman volume create mongoDbVolume

podman run -d \
    --pod nest-react-mongo-pod \
    -v mongoDbVolume:/data/db \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=<yourPassword> \
    mongo
```
