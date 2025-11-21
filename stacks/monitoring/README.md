# Monitoring

A lightweight monitoring stack using [kube-prometheus-stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack) Helm chart.

## Install

```bash
helm upgrade --install kube-prometheus oci://ghcr.io/prometheus-community/charts/kube-prometheus-stack -f values.yaml --namespace monitoring --create-namespace
```

Open [http://kubernetes-sandbox-control-plane.orb.local:30001](http://kubernetes-sandbox-control-plane.orb.local:30001) in a browser

## Uninstall

```bash
helm uninstall kube-prometheus --namespace monitoring
kubectl delete namespace monitoring
```

> NOTE: Removing the namespace deletes all monitoring data. Skip the second command if you plan to reinstall and keep the existing data.
