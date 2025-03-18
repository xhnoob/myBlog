---
layout: page
title: 文章分类
permalink: /categories/
---

<div class="categories-page">
  {% for category in site.categories %}
    <div class="category-section" id="{{ category[0] | slugify }}">
      <h2 class="category-title">{{ category[0] }}</h2>
      <ul class="category-posts">
        {% for post in category[1] %}
          <li class="category-post-item">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<style>
  .categories-page {
    margin-top: 2em;
  }
  
  .category-section {
    margin-bottom: 2em;
    padding-bottom: 1em;
    border-bottom: 1px dashed var(--border-color);
  }
  
  .category-title {
    color: var(--primary-color);
    border-bottom: 1px solid var(--secondary-color);
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }
  
  .category-posts {
    list-style: none;
    padding: 0;
  }
  
  .category-post-item {
    margin: 0.5em 0;
    position: relative;
    padding-left: 1.5em;
  }
  
  .category-post-item::before {
    content: "☯";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-size: 0.8em;
  }
  
  .post-date {
    color: var(--accent-color);
    font-size: 0.8em;
    margin-left: 1em;
  }
</style> 