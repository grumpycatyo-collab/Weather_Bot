from selenium import webdriver
import pandas as pd
from lxml import html
import requests
from bs4 import BeautifulSoup
from firebase import Firebase
from geopy.geocoders import Nominatim
 

config = {
  "apiKey": "AIzaSyCuPGh4E12VM982Nv5YtqjZ7aYfkS4Tz6E",
  "authDomain": "weather-bot-aaa81.firebaseapp.com",
  "databaseURL": "https://weather-bot-aaa81-default-rtdb.firebaseio.com",
  "projectId": "weather-bot-aaa81",
  "storageBucket": "weather-bot-aaa81.appspot.com",
  "messagingSenderId": "637249415762",
  "appId": "1:637249415762:web:759b50f9a69ec19f240d8b",
  "measurementId": "G-9GHN4HYXH9"

}


firebase = Firebase(config)
db = firebase.database()
users = db.child("users").get()
message = users.val()
query = ''
for element in message:
   query = message[element]



loc = Nominatim(user_agent="GetLoc")
 

getLoc = loc.geocode(f"{query}")

print(getLoc.address)

print("Latitude = ", getLoc.latitude, "\n")
print("Longitude = ", getLoc.longitude)