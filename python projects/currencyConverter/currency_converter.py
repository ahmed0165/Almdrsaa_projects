import requests

# Prompt user for input currencies
initial_currency = input("Enter an initial currency: ")
target_currency = input("Enter a target currency: ")

# Ensure a valid positive amount is entered
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

# Set up Fixer API URL with necessary parameters
url = f"https://api.apilayer.com/fixer/convert?to={target_currency}&from={initial_currency}&amount={amount}"

# Set up headers for the API request
headers = {
    "apikey": "zLvPHrLS5uk69RLlD5M7xrHsLJt6jVoL"
}

# Make the API request to convert currencies
response = requests.get(url, headers=headers)

# Check if the API request was successful (status code 200)
status_code = response.status_code
if status_code != 200:
    print("Sorry, there was a problem. Please try again later.")
    quit()

# Parse the API response to obtain the converted amount
result = response.json()
converted_amount = result['result']

# Display the converted amount to the user
print(f"Amount {initial_currency} = {converted_amount} {target_currency}")
