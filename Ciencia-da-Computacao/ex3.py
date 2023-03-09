import requests

USER_AGENT = "Chrome/111.0.0.0"

response = requests.get(
    "https://www.scrapethissite.com/pages/advanced/?gotcha=headers", 
    headers={
        "user_agent": USER_AGENT,
        "Accept": "text/html"
        }
    )

if "bot detected" in response:
    print("Bot detectado")
else:
    print(response.status_code)
