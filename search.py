from selenium import webdriver
import pandas as pd
from lxml import html
import requests
from bs4 import BeautifulSoup


try:
    from googlesearch import search
except ImportError:
    print("No module named 'google' found")
 
# to search
query = "weather canada"

print(query)


for j in search(query, tld="co.in", num=5, stop=5, pause=2):
    print(j)