基于 Django + Scrapy + pyspark 的图书爬虫推荐系统

支持导出/导入数据

支持爬虫

支持推荐

支持可视化

安装部署
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  配置镜像源
pip install -r requirements.txt   安装依赖
python manage.py runserver  后台启动


管理后台：
    http://127.0.0.1:8000/admin
前台：
    http://127.0.0.1:8000