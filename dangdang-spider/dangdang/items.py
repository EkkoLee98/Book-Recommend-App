# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class DangdangItem(scrapy.Item):
    # define the fields for your item here like:
    table = 'tushuxinxi'
    addtime = scrapy.Field()#书名
    tushumingcheng = scrapy.Field()
    # price = scrapy.Field()
    tushufenlei = scrapy.Field()#评论数
    fengmian = scrapy.Field()
    zuozhe = scrapy.Field()
    chubanshe = scrapy.Field()
    shangjiariqi = scrapy.Field()
    tushuxiangqing = scrapy.Field()
    thumbsupnum = scrapy.Field()
    crazilynum = scrapy.Field()
    clicktime = scrapy.Field()
    clicknum = scrapy.Field()
    discussnum = scrapy.Field()
