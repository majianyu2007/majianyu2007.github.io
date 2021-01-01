# js.org free domain


## 了解 ##

[官方链接](js.org)

## 需求 ##

1.一个托管在Github Pages上的Site。必须**要有内容**，不能草草一个html了事；

2.一台电脑；

3.一个Github账号；

4.明白PR的方法。

5.:boom::boom::boom:
***Due to the increased number of requests for js.org subdomains recently, with many having questionable relevancy to the JavaScript community and ecosystem, we've decided that going forward js.org will be focusing on accepting subdomain requests from projects with a clear relation to the JS community.***

***As some examples, personal pages, blogs, and Discord bot pages will no longer be accepted. Projects such as NPM packages, libraries, tools that have a clear direct relation to JavaScript, will be accepted when requesting a JS.ORG subdomain. This decision does not affect subdomains that have already been granted.***
:boom::boom::boom:

意思是你的申请必须关于js，npm。提高了门槛。
## 详细步骤 ##

打开js.org官方仓库。

[直达链接](https://github.com/js-org/js.org)

点击Fork

修改cnames_active.js。

最好按照字母顺序，不按照也没有关系

插入如下

```js
"你想要申请的前缀": "你的仓库URL",
```
保存
打开你的仓库，确保Pages环境存在，添加CNAME文件，内容为

```CNAME
你的前缀.js.org
```

点击仓库上方的Pull requests，点击绿色的“New pull request”

标题**不要**为Update cnames_active.js
改成“你的前缀.js.org”
其他的不用管，直接提交即可。

坐等成功

我的已经成功了，见
[#5039](https://github.com/js-org/js.org/pull/5039)

[Blog](https://mjy.js.org)
