# -*- coding: utf-8 -*-
import scrapy
import time
import datetime
from dangdang.items import DangdangItem


class EconomicSpider(scrapy.Spider):
    name = 'economic'
    allowed_domains = ['search.dangdang.com']
    start_urls = ('http://search.dangdang.com/?key=经济&page_index=1',)
    p = 1

    def parse(self, response):
        lilist = response.css('ul.bigimg li')
        # print(lilist)
        for li in lilist:
            item = DangdangItem()
            item['tushumingcheng'] = li.css(
                'a::attr(title)').extract_first()   # string类型   varchar
            item['zuozhe'] = li.css(
                'p.search_book_author span a::text').extract_first()

            doms = li.css('p.search_book_author span')

            try:
                item['chubanshe'] = doms[2].css('a::text').extract_first()
            except:
                item['chubanshe'] = ''

            try:
                item['shangjiariqi'] = item['shangjiariqi'] = doms[1].css(
                    '::text').extract_first()[2:12]
            except:
                item['shangjiariqi'] = ''

            now = datetime.datetime.now()
            date_time = now.strftime("%Y-%m-%d %H:%M:%S")

            item['tushufenlei'] = '经济'
            item['addtime'] = date_time
            item['thumbsupnum'] = 0
            item['crazilynum'] = 0
            item['clicknum'] = 0

            # item['price'] = li.css('p.price span::text').extract_first()
            try:
                item['discussnum'] = int(
                    li.css('p.search_star_line a::text').extract_first()[:-3])
            except:
                item['discussnum'] = 0

            try:
                if li.css('p.detail::text').extract_first():
                    item['tushuxiangqing'] = li.css(
                        'p.detail::text').extract_first()
                else:
                    item['tushuxiangqing'] = '暂无'
            except:
                item['tushuxiangqing'] = '暂无'

            if li.css('a img::attr(data-original)').extract_first():
                item['fengmian'] = li.css(
                    'a img::attr(data-original)').extract_first()
            else:
                item['fengmian'] = li.css('a img::attr(src)').extract_first()
            item['fengmian'] = "https:"+item['fengmian'].replace('_b_', '_w_')
            yield item
            # print(item)
            # print("一页结束")
        time.sleep(3)
        # print(self.p)
        self.p += 1
        if self.p < 2:
            next_url = 'http://search.dangdang.com/?key=经济&page_index=' + \
                str(self.p)
            url = response.urljoin(next_url)
            yield scrapy.Request(url=url, callback=self.parse)
