# Kubernetes Sandbox

A sandbox for experiments with Kubernetes.

## Table of Contents

- [Getting Started](#getting-started)

## Getting Started

To get started, you will need a local Kubernetes cluster.
The easiest way to create one is to use [Docker Desktop](https://www.docker.com/products/docker-desktop).

1. Install required tools

   ```bash
   # Docker Desktop
   brew install --cask docker

   # Lens, a Kubernetes IDE
   brew install --cask openlens

   # Helm, used for installing charts
   brew install helm
   ```

2. Enable Kubernetes in Docker Desktop (Settings > Kubernetes > Enable Kubernetes, then click "Apply & Restart")
3. Wait for Kubernetes to start then check its working by running a Kubernetes command, like `kubectl get nodes`
