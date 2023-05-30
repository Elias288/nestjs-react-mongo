existImg=$(podman images | grep nestjsimg | wc -l)
existContainer=$(podman ps -a | grep containernestjs | wc -l)
existContainerRunnin=$(podman ps | grep containernestjs | wc -l)

if [[ $existImg -eq 0 ]] then
    podman build -t nestjsimg .
fi

if [[ $existContainer -eq 0 ]] then
    podman run -d -p 8080:3000 -v "$(pwd)"/src:/usr/src/app/src --name containernestjs nestjsimg
elif [[ existContainerRunnin -ne 1 ]] then
    podman start containernestjs
fi

