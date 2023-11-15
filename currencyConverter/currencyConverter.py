import requests

initial_currency = input("Enter an initial currency: ")
target_currency = input("Enter a target currency: ")

while True:
    try:
        amount = float(input("Enter the amount: "))
    except ValueError:
        print("The amount must be a numeric value")
        continue

    if amount <= 0:
        print("The amount must be greater than zero")
        continue
    else:
        break

url = f"https://api.apilayer.com/fixer/convert?to={target_currency}&from={initial_currency}&amount={amount}"

headers = {
    "apikey": "zLvPHrLS5uk69RLlD5M7xrHsLJt6jVoL"
}

response = requests.get(url, headers=headers)

status_code = response.status_code
if status_code != 200:
    print("Sorry, there was a problem. Please try again later.")
    quit()

result = response.json()
converted_amount = result['result']
print(f"Amount {initial_currency} = {converted_amount} {target_currency}")
