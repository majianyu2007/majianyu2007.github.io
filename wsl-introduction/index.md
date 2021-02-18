# WSL Introduction


Windows Subsystem for Linux（简称WSL）是一个在Windows 10上能够运行原生Linux二进制可执行文件（ELF格式）的兼容层。它是由微软与Canonical公司合作开发，其目标是使纯正的Ubuntu 14.04 “Trusty Tahr”映像能下载和解压到用户的本地计算机，并且映像内的工具和实用工具能在此子系统上原生运行 。

简单来说，就是在Windows10上实现Ubuntu，而无需重启计算机。可以实现Windows下无法实现的事。

WSL提供了一个微软开发的Linux兼容内核接口（不包含Linux代码），来自Ubuntu的用户模式二进制文件在其上运行。

首先，打开“启用和关闭Windows功能”中打开“适用于Linux的Windows子系统”，并重启计算机，在“应用商店”下载想要的Linux版本，在“开始菜单”找到并打开，等待其安装完成并设置密码。

这样就可以使用linux了，可以在一个文件夹下按住“shift”点选“在此打开Linux shell”可以不在Windows下安装工具就可以使用如“openssl”和“ffmpeg”
