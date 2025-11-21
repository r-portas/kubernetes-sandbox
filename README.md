# kubernetes-sandbox

A sandbox of my Kubernetes learning, experiments and references. Focused on practical, production-leaning examples rather than theory.

## Prerequisites

The below tools are needed to run a local Kubernetes cluster and interact with it:

```bash
brew install orbstack kind kubectl helm
```

## Getting Started

### Start the Local Development Cluster

Use the VS Code tasks to create and manage your local Kubernetes cluster:

1. **Create the cluster:** Run the "kind: create kubernetes-sandbox" task.

   - Open the Command Palette (`Cmd+Shift+P`) and type "Tasks: Run Task"
   - Select "kind: create kubernetes-sandbox"
   - This will spin up a local kind cluster named `kubernetes-sandbox`

2. **Verify the cluster is running:**

   ```bash
   kubectl cluster-info
   kubectl get nodes -o wide
   ```

3. **Tear down the cluster:** Run the "kind: delete kubernetes-sandbox" task when you're done.
   - Open the Command Palette and type "Tasks: Run Task"
   - Select "kind: delete kubernetes-sandbox"
   - This cleanly removes the cluster and all resources

The cluster setup is fully automated via the tasks defined in [.vscode/tasks.json](.vscode/tasks.json), so you don't need to manually configure anything.

## License

Released under the MIT License. See `LICENSE` for details.
