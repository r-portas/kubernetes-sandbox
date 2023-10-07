# Helm

Helm is a package manager for Kubernetes.

## Command Commands

### Get the latest list of charts

```bash
helm repo update
```

### Install a release

```bash
# Install a release with no configuration
helm install <release-name> <chart-name>

# Install a release with custom values
helm install -f <values>.yaml <release-name> <chart-name>
```

### Show all values of a chart

```bash
helm show values <chart-name>
```

### List releases

```bash
helm list
```

### Uninstall a release

```bash
helm uninstall <release-name>
```
