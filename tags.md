---
layout: page
title: 文章标签
permalink: /tags/
---

<div class="tags-page">
  <div class="tag-cloud">
    {% for tag in site.tags %}
      <a href="#{{ tag[0] | slugify }}" class="tag-item" style="font-size: {{ tag[1].size | times: 8 | plus: 100 }}%;">
        {{ tag[0] }}
      </a>
    {% endfor %}
  </div>
  
  <div class="tag-list">
    {% for tag in site.tags %}
      <div class="tag-section" id="{{ tag[0] | slugify }}">
        <h2 class="tag-title">{{ tag[0] }}</h2>
        <ul class="tag-posts">
          {% for post in tag[1] %}
            <li class="tag-post-item">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>

<style>
  .tags-page {
    margin-top: 2em;
  }
  
  .tag-cloud {
    margin-bottom: 3em;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    padding: 2em;
    border-radius: 5px;
    border: 1px solid var(--border-color);
  }
  
  .tag-item {
    display: inline-block;
    margin: 0.3em;
    padding: 0.2em 0.5em;
    background: rgba(242, 198, 112, 0.1);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  .tag-item:hover {
    background: var(--secondary-color);
    color: white;
    transform: translateY(-2px);
  }
  
  .tag-section {
    margin-bottom: 2em;
    padding-bottom: 1em;
    border-bottom: 1px dashed var(--border-color);
  }
  
  .tag-title {
    color: var(--primary-color);
    border-bottom: 1px solid var(--secondary-color);
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }
  
  .tag-title::before {
    content: "☸ ";
    color: var(--secondary-color);
  }
  
  .tag-posts {
    list-style: none;
    padding: 0;
  }
  
  .tag-post-item {
    margin: 0.5em 0;
    position: relative;
    padding-left: 1.5em;
  }
  
  .tag-post-item::before {
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