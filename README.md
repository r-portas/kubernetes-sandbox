# Kubernetes Sandbox

This is my attempt of creating a small kubernetes cluster for development and deploying small scale applications.

This makes use of [k3s](https://k3s.io/) to create a mini single node cluster, if you wanted to you could even run this on a Raspberry Pi.

This little project has a few goals:

- Automate creating a small single-node Kubernetes cluster
- Stress test k3s running on constrained hardware (Vagrant VM) that mimics low-end cloud hardware and Raspberry PIs (Single CPU, 1GB RAM)

## Getting started

Install [Vagrant](https://www.vagrantup.com/) and run the following commands

```bash
vagrant up
# Wait for the VM to be created
vagrant ssh

# You should be dropped into the VM's shell
$ sudo k3s kubectl get node
```

After a few minutes Vagrant will have created a virtual machine with k3s running.

The neat thing about Vagrant is that it will give you a completely self-contained VM, using it is identical to using a machine hosted on a cloud provider.

You also probably want to install `kubectl` on your host machine, and interact with the cluster that way. Once you have `kubectl` installed, you can access the dashboard by running

The `kubectl` configuration file is stored at `/etc/rancher/k3s/k3s.yaml` within the VM, it automatically gets copied to the data directory by the bootstrap process

```bash
cp ./data/config ~/.kube/config
```

```bash
# Obtain the bearer token, used to login to the dashboard
kubectl -n kubernetes-dashboard describe secret admin-user-token | grep ^token

# Proxy the dashboard to you local machine
kubectl proxy
```

Open [http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/) in a browser
