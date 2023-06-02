# NESTJS - REACT - MONGO

Backend in nestjs and mongo in a podman container

## BACKEND

Commands to compile the container image and the container where the backend will be located

Located in [nestjsback](./nestjsback/):

```sh
# GENERATE THE DEV ENVIRONMENT WHIT Containerfile
podman build -t fedoradevnestjsimg .

# Generate the dev enviroment container
podman play kube devEnvironment.yaml

# MANUALLY
podman run -it -p 8080:3000 \
    -v mnt/c/Users/.../nest-react-mongo:/usr/src/app \
    --name debian-dev-nestjs \
    fedoradevnestjsimg 
```

### Utils scripts

>  Automatically initialize the container with [init.sh](./nestjsback/scripts/init.sh)
> ```sh
> bash scripts/init.sh
> ```

>  Restart the container with [restart.sh](./nestjsback/scripts/restart.sh)
> ```sh
> bash scripts/restart.sh
> ```

>  Delete container and image with [clear.sh](./nestjsback/scripts/clear.sh)
> ```sh
> bash scripts/restart.sh
> ```
