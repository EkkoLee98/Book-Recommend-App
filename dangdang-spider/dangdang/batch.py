from scrapy import spiderloader
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings


def run_spider():
    settings = get_project_settings()
    process = CrawlerProcess(settings)
    # 查看现有爬虫
    spider_loader = spiderloader.SpiderLoader.from_settings(settings)
    # ['taobao', 'jingdong', '其他爬虫']，这三个是我现有的所有爬虫
    print('111')
    print(spider_loader.list())

    # 将 spider 逐个添加到 CrawlerProcess 实例及 crawlers 列表中
    crawlers = []
    for spider in spider_loader.list():
        print(f'Running spider {spider}')
        crawler = process.create_crawler(spider)
        crawlers.append(crawler)
        process.crawl(crawler)

    # 开始爬虫
    process.start()
    # 获取爬虫的统计信息
    stats_dict = {}
    for crawler in crawlers:
        stats_dict[crawler.spider.name] = crawler.stats.get_stats()

    return stats_dict


def main():
    spider_stats = run_spider()
    print('222')
    print(spider_stats)


if __name__ == "__main__":
    main()
