# 我的个人博客

这是一个基于Jekyll的个人博客网站，部署在GitHub Pages上。

## 特点

- 简洁美观的设计
- 响应式布局，适配各种设备
- 支持文章分类和标签
- 支持分页功能

## 本地开发

要在本地运行此博客，请确保已安装以下工具：

1. Ruby
2. RubyGems
3. Jekyll

### 安装步骤

```bash
# 安装Jekyll和Bundler
gem install jekyll bundler

# 克隆仓库
git clone https://github.com/xhnoob/xhnoob.github.io.git
cd xhnoob.github.io

# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve
```

然后在浏览器中访问 `http://localhost:4000` 即可查看博客。

## 如何发布新文章

1. 在 `_posts` 目录下创建一个新的Markdown文件，文件名格式为 `YYYY-MM-DD-title.md`
2. 在文件开头添加YAML前置数据
3. 编写文章内容
4. 提交并推送到GitHub仓库

示例：

```markdown
---
layout: post
title: "你的文章标题"
date: YYYY-MM-DD HH:MM:SS +0800
categories: 分类
tags: 标签1 标签2
---

这里是文章内容...
```

## 许可证

MIT License 