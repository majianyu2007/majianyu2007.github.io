# Docker on LXC



众所周知，lxc容器启动不了docker。而openVZ需要主机提供商修改某些配置文件。

这台机器由[Euserv](https://euserv.com/)提供，是免费的，配置是1h1g，在2020.04.16订(bai)购(piao)。

![dockeronlxc1](/images/dockeronlxc1.png)

闲着也是闲着，硬盘这么小(仅仅10GB)建个站就满了。于是想变着花样去玩。

突发奇想，想搭建一个Bitwarden，发现只有Docker能安装，于是先安装docker。安装docker使用官网教程，结果运行
```shell
docker run hello-world
```
失败了，在官方GitHub上打开Issue却被关闭，不过也给我了一些有用信息。貌似lxc也是需要设置。

于是我抱着试一试的心态到官方论坛上试一试，得到的是[维护](https://status.euserv.com/index.php?do=details&task_id=2623)

于是我又重新安装，结果还是一毛一样，于是继续吃灰也。

昨日又闲来无事，遂打开重装系统页，发现新增加了

CentOS 8 - 64bit - minimal v4

Ubuntu 20.04 LTS (Focal Fossa) - 64Bit - minimal v4

两个系统
重装为20.04，安装docker

- Update the apt package index and install packages to allow apt to use a repository over HTTPS:
```shell
sudo apt-get update
```

```shell
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

- Add Docker’s official GPG key:

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- Verify that you now have the key with the fingerprint 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88, by searching for the last 8 characters of the fingerprint.

```shell
sudo apt-key fingerprint 0EBFCD88
```

- Use the following command to set up the stable repository. To add the nightly or test repository, add the word nightly or test (or both) after the word stable in the commands below. Learn about nightly and test channels.

```shell
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

- Update the apt package index, and install the latest version of Docker Engine and containerd, or go to the next step to install a specific version:

```shell
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

运行

```shell
sudo docker run hello-world
```

得到

```shell
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

```

成功！




