from algoliasearch.search_client import SearchClient

client = SearchClient.create('8JYC6YT0ZO', 'a7b957233d992292bd0e208b28a01449')
index = client.init_index('Planets')
request_options = {
  'autoGenerateObjectIDIfNotExist': True
}

# Create indicies for each planet in the solar system
planets = [
    {
        'name': 'Mercury',
        'type': ['Terrestrial', 'Inner'],
        'position': 1
    },
    {
        'name': 'Venus',
        'type': ['Terrestrial', 'Inner'],
        'position': 2
    },
    {
        'name': 'Earth',
        'type': ['Terrestrial', 'Inner'],
        'position': 3
    },
    {
        'name': 'Mars',
        'type': ['Terrestrial', 'Inner'],
        'position': 4
    },
    {
        'name': 'Jupiter',
        'type': ['Gas Giant', 'Outer'],
        'position': 5
    },
    {
        'name': 'Saturn',
        'type': ['Gas Giant', 'Outer'],
        'position': 6
    },
    {
        'name': 'Uranus',
        'type': ['Gas Giant', 'Outer'],
        'position': 7
    },
    {
        'name': 'Neptune',
        'type': ['Gas Giant', 'Outer'],
        'position': 8
    },
    {
        'name': 'Pluto',
        'type': ['Dwarf', 'Outer', 'Trans-Neptunian'],
        'position': 9
    },
]

#print(planets)

res = index.save_objects(planets, request_options)