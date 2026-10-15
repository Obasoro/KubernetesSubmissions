# Output App

```sh
docker build -t YOUR_DOCKERHUB_USER/log-output:1.1 .
docker push YOUR_DOCKERHUB_USER/log-output:1.1

kubectl apply -f manifests/deployment.yaml
kubectl get pods
kubectl logs -f deployment/log-output-dep

```

Added Exercise 1.3
