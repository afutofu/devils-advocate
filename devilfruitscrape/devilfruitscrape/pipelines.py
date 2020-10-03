# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import mysql.connector


class DevilfruitscrapePipeline:
    def __init__(self):
        self.create_connection()
        self.create_table()

    def create_connection(self):
        self.conn = mysql.connector.connect(
            host="localhost",
            user="root",
            passwd="123456",
            database="devils_advocate"
        )
        self.cursor = self.conn.cursor()

    def create_table(self):
        self.cursor.execute("""DROP TABLE IF EXISTS fruits""")
        self.cursor.execute("""
            CREATE TABLE fruits (
                id int AUTO_INCREMENT PRIMARY KEY,
                name varchar(255),
                price int,
                type varchar(10),
                imagelink text,
                english_name varchar(100),
                meaning varchar(50),
                info text
            )
        """)

    def store_item(self, item):

        info = item['info'].replace('"', '\\"')

        self.cursor.execute("""
            INSERT INTO fruits (name, type, price, imagelink, english_name, meaning, info) VALUES ("%s", "%s", %d, "%s", "%s", "%s", "%s")
        """ % (item['name'], item['fruit_type'], item['price'], item['imagelink'], item['english_name'], item['meaning'], info))

        self.conn.commit()

    def process_item(self, item, spider):
        self.store_item(item)
        return item
