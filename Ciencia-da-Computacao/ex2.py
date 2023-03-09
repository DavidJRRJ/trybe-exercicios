import requests

response = requests.get("https://api.github.com/users")
data = response.json()

for user in data:
    print(user['login'], user['url'], sep=', ')
