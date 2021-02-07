from algoliasearch.search_client import SearchClient
import requests

# Initialise API information for my Algolia account
client = SearchClient.create('8JYC6YT0ZO', 'a7b957233d992292bd0e208b28a01449')
index = client.init_index('Wines')
request_options = {
  'autoGenerateObjectIDIfNotExist': True
}

# Get the Wine dataset from Github
r = requests.get('https://github.com/algolia/datasets/raw/master/wine/bordeaux.json')
if r.status_code == 200:
    wines = r.json()
else: 
    print('Something went wrong... Unable to get wine data!')
    print(r.status_code + ', ' + r.text)

# Push the index to my account
res = index.save_objects(wines, request_options)
print('Upload complete!')
