# Podinfo

> Podinfo is a tiny web application made with Go that showcases best practices of running microservices in Kubernetes.

[GitHub Repository](https://github.com/stefanprodan/podinfo/tree/master/charts/podinfo)

## Install

```bash
helm upgrade --install --wait podinfo --namespace default oci://ghcr.io/stefanprodan/charts/podinfo
```

```bash
kubectl -n default port-forward deploy/podinfo 8080:9898
```

Then open your browser to [http://localhost:8080](http://localhost:8080)

- Open Swagger UI at [http://localhost:8080/swagger](http://localhost:8080/swagger)
- Check [http://localhost:8080/metrics](http://localhost:8080/metrics) for Prometheus metrics.

## Uninstall

```bash
helm uninstall podinfo --namespace default
```
