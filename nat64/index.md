# NAT64 for IPV6 Only VPS


有些服务商提供仅IPV6的VPS，但是像Github这类的就没有ipv6，所以我们可以借助公共NAT64

# trex.fi

```shell
echo -e "nameserver 2001:67c:2b0::4\nnameserver 2001:67c:2b0::6" > /etc/resolv.conf
```

复制到终端即可。

官方说明：

[link](http://www.trex.fi/2011/dns64.htm)

# nat64.net

貌似是个人的，使用Hetzner的机房。慎用

```shell
echo -e "nameserver 2a00:1098:2b::1\nnameserver 2a00:1098:2c::1" > /etc/resolv.conf
```

说明：

[link](https://nat64.net/)
