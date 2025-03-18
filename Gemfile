source "https://rubygems.org"

gem "jekyll", "~> 4.3.2"
gem "minima", "~> 2.5"

# 如果你想在GitHub Pages上使用，请使用下面的配置
# gem "github-pages", group: :jekyll_plugins

# 插件
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17.0"
  gem "jekyll-seo-tag", "~> 2.8.0"
  gem "jekyll-paginate", "~> 1.1.0"
end

# Windows和JRuby需要这个
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# 提高Windows上的性能
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# 锁定eventmachine版本
gem "eventmachine", "1.2.7", :platforms => [:mingw, :x64_mingw, :mswin]

# HTTP服务器
gem "webrick", "~> 1.8" 