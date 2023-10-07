# kube-prometheus-stack

> This deploys the `kube-prometheus-stack` via Helm

## Install

```bash
# Add the Prometheus Helm repository, only needs to be done once
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

# Get the latest charts
helm repo update

# Install it
helm install -f values.yaml kube-prometheus-stack prometheus-community/kube-prometheus-stack

# Remove it
helm uninstall kube-prometheus-stack
```

## Resources

- [ArtifactHub - kube-prometheus-stack](https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack)
