# UTM Virtual Machine


写在前面：手里有台iPhone7，不知干什么好，没有Android的可玩性，即使Android不root，也会有像termux的容器。9-11岁时，我还在玩limbo，bochs，lbochs，APQ。这些都是一些模拟器。bochs和lbochs是基于bochs的，而limbo和APQ是基于qemu的。要我给他们排序的话，bochs是最简单的，我记得我最早用过的镜像是andows.img，用起来简单，把sdl和镜像放在指定位置就行了。点击app启动，音量键控制左右键，滑动屏幕控制鼠标。点击左下角（还是右下角，我忘了）呼出键盘。就是在朋友同学面前装B用的。lbochs支持更多扩展，limbo有各种版本，对于X86的安卓兼容较好，一般在Android上我首选limbo。APQ比较稳定，但是前提是要Root，仅支持VNC，得自己去改配置。就这样。我接触到了qemu。

在qemu的世界，我只做了XP的镜像，当年我家的电脑配置不高，仅仅有2G而已，一般开个虚拟机就要处在死机的边缘。但我还是经常用它来做镜像，传到手机上。那段时间，我只是从贴吧收藏大佬分享的镜像，大多都是XP和98，再高的就是7，8，10，不过开个机都要等几个小时。

以前我有一台iPhone 4，完美越狱，用的盘古越狱工具。唯一能装B的，也就是一个叫Bochs的应用。在百度上，我勉勉强强找到了安装方法，但是打开就闪退，并且教程都是用的iPhone1或3，后来，我在威锋源上找到了一个writeful的源，但是后来威锋源关闭，新版的Bochs出来，但是仅仅支持iOS10以下，也就是32位系统，这时，我已经用着iPhone7了。

对于iPhone7而言，可以用三种方式运行Windows。一种叫Idos2，在iOS10以前，是Idos，是用来运行dos游戏的，idos2用的dosbox，但是仅能在越狱后浏览其目录，放上教程里提供的镜像，输入“win95”启动，虽然麻烦，却异常稳定，只是显卡没有驱动。

再后来，国外大神开发了iBox，基于Bochs，国外大神演示时用的iPhone7，跑起了Windows，但是却花屏。我把Windows3.11，Windows95，Windows98的镜像放在里面，却异常好用！其实就是能在64位设备上运行的Bochs而已。

第三个，就是今天说的UTM虚拟机，基于qemu，能跑起Windows XP，貌似能跑起Windows7，10。也能跑起Android x86，Linux。以下是详细步骤。项目主页：https://getutm.app/ GitHub：https://github.com/utmapp/UTM

1.建议越狱。

为什么呢？说白了——便于续签。没错，便于续签！要不然你忍心7天装一次吗？iPhone X以下设备可以使用checkra1n越狱，可以的话我可以出一期教程。

2.安装UTM

如果你越狱了，直接从爱思助手拖放ipa文件即可，要没有越狱（像是iPhone11），可以用altstore。

altstore教程：

1.打开https://altstore.io/下载应用程序。Windows版仅支持Windows10 。

![pic](https://i.loli.net/2020/05/01/T8IZQbfJkzdXLF3.png)
解压后点击AltInstaller.msi，进行安装，根据需求安装即可。

在安装的目录下，像D:\Program Files (x86)\ 找到AltServer，打开，点击AltServer.exe，启动，在右下角图标左键。

![pic](https://i.loli.net/2020/05/01/dhubM5rGjWx1tke.png)
选择“Install AltStore”选择你的设备。

![pic](https://i.loli.net/2020/05/01/72XT5dHIsqPaYt3.png)
如实填写你的Apple ID和密码，要进行签名，不是盗号！注意，要下载官网的iTunes，不是Windows10自带的应用商店里的！要不然会报错！也不能不安装！

安装完成后，添加源：https://alt.getutm.app

然后搜索并下载即可。

下载完成了，就该玩了。准备好一个镜像，ISO文件，Windows的可以从这里下载：http://msdn.itellyou.cn/

ed2k连接用迅雷下载即可。打开iTunes，找到左上角的小手机，点一下，如果是灰色，无法点击，那就等一会。点进去找到文件共享，在App找到“UTM”，这时里面是空的，添加你下载的镜像进去。接下来就是手机操作了（温馨提示：iPhone7建议用XP，iPhoneX以上最好不要用8.1或10，其他随意~）

下载好的应用是这样子的

![pic](https://i.loli.net/2020/05/01/e3TKP4DdCQ1lSWm.png)
加载很慢，截图截到3M
打开后。会出现一段提示，大概是不能强制关闭UTM，要点左上面的小X号

打开后，是这样的

![pic](https://i.loli.net/2020/05/01/jV8Lr3ZmGNOl9eo.png)
那两个是我提前创建好的。点击右上角的+，会这样：

![pic](https://i.loli.net/2020/05/01/fwsHnUy79YTtA4J.png)
内存，iPhone7设置到768差不多，最高的应该是1015吧，点击加载镜像，如下

![pic](https://i.loli.net/2020/05/01/oYZSMsv8i2T5dk6.png)
点击右上角的+，创建一个驱动器，如图

![pic](https://i.loli.net/2020/05/01/8qfijOIHSLBuXEF.png)
镜像类型，硬盘就是disk，光驱就是cd/dvd，如图

![pic](https://i.loli.net/2020/05/01/3nhPlu6W1KtxTJV.png)
先选cd/dvd，点击文件路径，点击右上角的+，如图

![pic](https://i.loli.net/2020/05/01/vnLVM6Sblpe5AkB.png)
会这样

![pic](https://i.loli.net/2020/05/01/1kNJEcW2Hf6LhUe.png)
如果选的cd/dvd，选“导入”，会这样

![pic](https://i.loli.net/2020/05/01/Wevqyri87jakPOQ.png)
这是我已经打开utm文件夹，具体可以点击“我的iPhone”找到“UTM”文件夹，选择你复制的镜像ISO文件，如图

![pic](https://i.loli.net/2020/05/01/zYtWGIiEkJRs146.png)
再点一次镜像，加载，重复第（调整disk或cd/dvd）步选择disk，不要选导入，如果你有现成的，那就选导入，一般是xxx.img，创建，一般填hda.img，第二行看系统大小来定，XP可以是10G，win7可以是20G，10G填10240，20G填20480，以此类推。

创建完成后，点击播放建，开机，正常安装系统即可。来了电话回自动暂停，来了微信，就点击上面的暂停键，暂停。如图（会加载缓慢）

![pic](https://i.loli.net/2020/05/01/Xl1ow2tg3qPU7xf.png)
![pic](https://i.loli.net/2020/05/01/Xl1ow2tg3qPU7xf.png)
继续运行点击中间即可。退出点击X，如果开着机，相当于强制关机。

![pic](https://i.loli.net/2020/05/01/BDYJa1RFfnIX4Qt.png)

---
Q&A：

Q：为什么安装AltStore会出现签名错误？

A：13.3.1有此问题，建议越狱后使用，或用爱思助手安装。

Q：为什么7天后提示我验证应用？

A：普遍问题，建议越狱后安装续签插件。免费开发者账户需要7天一签，付费的一年一签。

Q：越狱后如何在手机上直接安装UTM.ipa？

A：下载Filza，在里面点选ipa文件安装。

Q：为什么我在一些云上续签了，但是启动VM时会崩溃？

A：许多“云”签名服务（包括AppCake）不能与UTM一起使用，因为它们使用了错误的签名证书。如果尝试启动VM时发生崩溃，则可能是您的签名证书无效。

Q：有什么免费的续签方法吗？

A：如果您运行的是普通iOS，则使用iOS App Signer 可以免费，轻松地重新签名IPA 。然后，您可以使用iTunes，音乐应用程序或Xcode安装它。

注：图片加载于sm.ms图床，部分资料参考与UTM官网。

