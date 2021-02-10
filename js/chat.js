var domain = window.location.hostname;
function cc() {
	var enabled = localStorage.getItem('enabled');
	if (enabled === null) {
		localStorage.setItem('enabled', 'true');
	} else {
		localStorage.removeItem('enabled');
	}
	location.reload(true);
}
function welcome() {
	console.log('欢迎来到MaJianyu\'s Blog! 你在与打开这个 ' + domain + ' 的Console的人一起交流 输入 help() 并按下回车来了解更多.');
	console.log('由MaJianyu制作 :) 源代码（你需要修改一些文件）: https://github.com/DaltonWebDev/console.chat / 我的博客: https://mjy.js.org');
}
function help() {
	console.log('HELP >\n设置用户名: 输入 username("你的用户名") 并按下空格.\n发送信息: 输入 send("你想要发送的信息") 并按下空格. 你还可以包含第二个参数来更改文本颜色，如下所示: send("你想要发送的信息", "254cf5") - 输入任何不带#符号的有效十六进制代码\n\n你知道还可以发送`你想要发送的信息`吗?');
}
function username(x) {
	localStorage.setItem('username', x);
	console.log('Username set to: ' + x + '!');
}
var messageCount = 0;
function loadMessages() {
	var myRequest = new Request('https://api.majianyu.pp.ua/api/read.php?domain=' + domain);
	fetch(myRequest)
  		.then(function(response) { return response.json(); })
  		.then(function(data) {
  			for (i in data.messages) {
  				if (messageCount === 0 || i > messageCount) {
						console.log('%c ' + data.messages[i].message, 'color: #' + data.messages[i].color);
  					//console.log(data.messages[i].message);
  					messageCount++;
  				}
    		}
  	});
}
function send(message, color = '000000') {
	var usernameLS = localStorage.getItem('username');
	var myRequest = new Request('https://api.majianyu.pp.ua/api/send.php');
	if (usernameLS === null) {
		var outputtedMessage = message;
	} else {
		var outputtedMessage = usernameLS + ': ' + message;
	}
	var data = {"domain": domain, "message": outputtedMessage, "color": color};
	var formData  = new FormData();
  	for (var name in data) {
    	formData.append(name, data[name]);
 	}
	fetch(myRequest, {
		method: 'POST',
		body: formData
	})
  .then(function(response) { return response.json(); })
  .then(function(data) {
  	if (data.error !== false) {
  		console.error(data.error);
  	} else {
  		loadMessages();
			var enabled = localStorage.getItem('enabled');
			if (enabled === null) {
				localStorage.setItem('enabled', 'true');
				location.reload(true);
			}
  	}
  });
}

var enabled = localStorage.getItem('enabled');
if (enabled === null) {
	console.log(`想和浏览${domain}的其他人聊天吗？令人惊叹的！键入cc（）并按enter键以启用控制台交流 / 随时再次发送cc（），以停止加载消息。`);
} else {
	loadMessages();
	setInterval(loadMessages, 5000);
	setTimeout(welcome, 2000);
}
