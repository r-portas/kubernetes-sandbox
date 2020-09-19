# Boostraps a node to run k3s
# Should be ran as root

# Install containerd
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
dnf install -y containerd.io

# Create this directory, the k3s installer will copy binaries to here
sudo mkdir /usr/local/bin

yum install -y container-selinux selinux-policy-base
rpm -i https://rpm.rancher.io/k3s-selinux-0.1.1-rc1.el7.noarch.rpm

# Don't enable Traefik, as its an older version
# Install your preferred ingress
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --disable traefik" sh

# Copy the kubectl config to the data directory, to share with the host
cp /etc/rancher/k3s/k3s.yaml /data/config
