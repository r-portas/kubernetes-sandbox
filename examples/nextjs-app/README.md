# Next.js App

## Overview

- Bun-powered Next.js demo that hot-reloads via Tilt inside a local Kubernetes cluster.
- Ships with a Redis Deployment/Service and wires `REDIS_URL=redis://redis:6379` into the app pod.
- Home page hosts a server component counter using Bun's Redis client to increment/decrement a `demo:counter` key.

## Install

```bash
brew install tilt
```

## Running

```bash
tilt up
```

Then make changes to the code and see the hot reloading working
