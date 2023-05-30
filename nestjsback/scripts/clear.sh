existImg=$(podman images | grep nestjsimg | wc -l)
existContainer=$(podman ps -a | grep containernestjs | wc -l)
existContainerRunnin=$(podman ps | grep containernestjs | wc -l)

if [[ existContainerRunnin -eq 1 ]] || [[ existContainer -eq 1 ]] then
    podman stop containernestjs
    podman rm containernestjs
fi

if [[ existImg -eq 1 ]] then
    podman image rm nestjsimg
fi