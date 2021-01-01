# Markdown学习笔记


## 后缀

.md

.markdown

.MD

.MARKDOWN

## 标头

```markdown
# h1标头
## h2标头
### h3标头
......
###### h6标头
```

# h1标头
## h2标头
### h3标头
......
###### h6标头

H后数越大，字体越小
## 重点

```markdown
*要斜体的文字*

**要加黑的文字**

_要斜体的文字_

__要加黑的文字__

```

*要斜体的文字*

**要加黑的文字**

_要斜体的文字_

__要加黑的文字__

## 排序

### 无序
```markdown
* 1
* 2
* 3
* 4
* 5
 * 1
 * 2
 * 3
 * 4
 * 5
```


* 1
* 2
* 3
* 4
* 5
 * 1
 * 2
 * 3
 * 4
 * 5

在此博客上空格加“*”是同样的效果。

### 有序
```markdown
1. 1
2. 2
3. 3
4. 4
5. 5
```
1. 1
2. 2
3. 3
4. 4
5. 5

使用一个回车后会自动补充

## 引用

###图片
```markdown
![图片描述](图片位置)
```
![Logo](/logo.png)

### 链接
```markdown
[链接描述](链接)
```

[Blog](https://mjy.js.org)

### 块引用

```markdown
As Kanye West said:

> We're living the future so
> the present is our past.
```

As Kanye West said:

> We're living the future so
> the present is our past.

### 内联代码
```markdown
I think you should use an
`<addr>` element here instead.
```
I think you should use an
`<addr>` element here instead.

## 语法高亮
```markdown
` ` `语言类型
code
` ` `
// 中间无空格
```

```php
<?php echo "Hello world";?>
```
将代码前加上四个空格有同样的效果
```markdown
    <?php echo "Hello world";?>
四个空格+code
```
    <?php echo "Hello world";?>
    <?php echo "1";?>
    <?php echo "2";?>
    <?php echo "3";?>

## 任务清单
- [ ] 未完成
- [x] 已完成

## 表格
```markdown
A | B
-- | --
1 | 2
2 | 3
```
A | B
-- | --
1 | 2
2 | 3

## 删除线

```markdown
<del>Del</del>
```

<del>Del</del>

## 表情

[URL](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

