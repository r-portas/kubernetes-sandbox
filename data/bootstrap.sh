# Boostraps a node to run k3s
# Should be ran as root
apt-get update
apt-get install -y containerd
curl -sfL https://get.k3s.io | sh -

# Kubernetes dashboard
GITHUB_URL=https://github.com/kubernetes/dashboard/releases
VERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')
sudo k3s kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml
sudo k3s kubectl create -f /data/dashboard.admin-user.yml -f /data/dashboard.admin-user-role.yml

# Copy the kubectl config to the data directory, to share with the host
cp /etc/rancher/k3s/k3s.yaml /data/config