# How to Turn WordPress Into a Black and White Two Color Style to Show Condolences


2020年4月4日，是一个黑白的日子。作为一个站长，我们也应该把自己的网站变成黑白（非强制），利用简单的CSS即可

1、这个方法不只可以用于Wordpress，任何网站都可以

2、打开你网页的源代码，对于Wordpress来说就是“header.php”

3、在源码顶部的 <head></head> 中添加以下代码

```css
<style>
html{
    /* IE */
    filter: gray;
    /* 除Firefox以外其它的浏览器 */
    Invalid property value.filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(1);
}
</style>
```
更新文件即可。
