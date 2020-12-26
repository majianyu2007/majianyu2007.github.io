# WordPress Uses ReCaptcha


首先，准备一个谷歌账号，一个梯？子#（自备）谷歌访问助手即可（自己百度）。一个Wordpress网站，能上Wordpress.org的插件

1.打开https://www.google.com/recaptcha/admin，直接点击即可，创建时标签自己填写，类型选择第二版即可，如果选择第三版，后面说到的bbPress使用就不支持。填写网站时最好是把example.com和www.example.com都填上，以后还有什么网站直接在设置中添加即可。一定要接受条款

2.创建完成后会有两个密钥——网站密钥和密钥，保留在这个页面，可以先不复制。打开Wordpress后台，点击插件——安装插件，安装插件“reCaptcha by BestWebSoft”，安装完成后，转到设置页面，点击左侧栏的“reCaptcha”，在“Site Key”填入获得的网站密钥，在“Secret Key”填入密钥。保存设置后，点击“Test reCaptcha”，看看能否加载出来，如果无红字，那就成功了，金色区域需要购买，下面一定选上你是2版本还是3版本，选择在哪里启用，退出再登录，你就可以看到reCpatcha了。如果出现红字无法登录，去Wordpress的plugins目录把“google-recaptcha”重命名，刷新网页，进入后台，再把名字改回来，查看哪一方面出了问题。

3.支持中国访问，有些国外网站有时在登录时提示要点击reCaptcha，那就是这个网站用的google.com的api，一般来说装个谷歌上网助手就行，但是中国大多数网名不回去装这个插件，怎么办呢？可以站长自己改。我们知道google.com在国内被墙了，但是google.cn和recaptcha.net没有，这两个网站都能提供api，所以我们就用这两个网站的api，二选一即可。在Wordpress后台打开插件——插件编辑器，选定reCaptcha by BestWebSoft插件，Ctrl+F搜索（注意，别用了谷歌浏览器的搜索，可以点按一下编辑器，待光标闪烁时，Ctrl+F即可。搜索“google.com”如果看到后面没有后缀，像/recaptcha这样的，忽略即可；遇到https://www.google.com/recaptcha/admin#list的地址，直接略去。其他的，“www.”后面的“google.com”换成google.cn或recaptcha.net（二选一）即可。保存更改，关掉上网助手，看看能不能加载出来了。

4.bbPress reCaptcha。如果在bbPress的登录界面点击“登录”后，跳转到wordpress的登录页面，并提示要验证码，可以安装“reCAPTCHA for bbPress”这款插件，同样点这个插件下面的”Seetings“，填入密钥即可。若想支持国内访问，就按照第3步的修改方法修改即可，就该一个，还是不要改https://www.google.com/recaptcha/admin#list
