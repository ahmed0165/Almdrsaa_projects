import requests

API_KEY = "zLvPHrLS5uk69RLlD5M7xrHsLJt6jVoL"
CONVERT_URL = "https://api.apilayer.com/fixer/convert"
SYMBOLS_URL = "https://api.apilayer.com/fixer/symbols"

def get_currency_list():
    headers = {"apikey": API_KEY}
    response = requests.get(SYMBOLS_URL, headers=headers)
    data = response.json()
    return data["symbols"]

def get_valid_currency(prompt, currency_list):
    while True:
        currency_code = input(prompt).upper()
        if currency_code in currency_list:
            return currency_code
        else:
            print("Invalid currency code. Please try again.")

def get_valid_amount():
    while True:
        amount = input("Enter the amount: ")
        try:
            amount = float(amount)
            if amount != 0:
                return amount
            else:
                print("Amount cannot be zero. Please try again.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")

def convert_currency():
    currency_list = get_currency_list()

    print("Available currencies:")
    for currency_code, currency_name in currency_list.items():
        print(f"{currency_code}: {currency_name}")

    from_currency = get_valid_currency("Enter the source currency code: ", currency_list)
    to_currency = get_valid_currency("Enter the target currency code: ", currency_list)
    amount = get_valid_amount()

    convert_params = {
        "to": to_currency,
        "from": from_currency,
        "amount": amount
    }

    headers = {"apikey": API_KEY}
    convert_response = requests.get(CONVERT_URL, headers=headers, params=convert_params)
    convert_data = convert_response.json()

    if 'error' in convert_data:
        print(f"Conversion Error: {convert_data['error']['info']}")
    else:
        converted_amount = convert_data['result']
        print(f"{amount} {from_currency} is equal to {converted_amount} {to_currency}")

if __name__ == "__main__":
    convert_currency()
