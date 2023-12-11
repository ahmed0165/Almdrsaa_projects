import requests
import tkinter as tk
from tkinter import messagebox

api_key = 'fe2955573219b85551bc849f7bb4cd0d'
def get_weather(api_key, location):
    url = f"http://api.weatherstack.com/current"
    params = {"access_key": api_key, "query": location}
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()  # Check if the request was successful

        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data from WeatherStack API: {e}")
        return None

def display_weather(weather_data):
    if weather_data:
        location = weather_data.get("location", {}).get("name", "Unknown Location")
        temperature = weather_data.get("current", {}).get("temperature", "N/A")
        weather_description = weather_data.get("current", {}).get("weather_descriptions", ["N/A"])[0]
        pressure = weather_data.get("current", {}).get("pressure", "N/A")
        precipitation = weather_data.get("current", {}).get("precip", "N/A")
        humidity = weather_data.get("current", {}).get("humidity", "N/A")
        wind_speed = weather_data.get("current", {}).get("wind_speed", "N/A")

        result_text = f"Weather in {location}:\n"
        result_text += f"Temperature: {temperature}°C\n"
        result_text += f"Description: {weather_description}\n"
        result_text += f"Pressure: {pressure} hPa\n"
        result_text += f"Precipitation: {precipitation} mm\n"
        result_text += f"Humidity: {humidity}%\n"
        result_text += f"Wind Speed: {wind_speed} m/s"

        result_label.config(text=result_text)
    else:
        messagebox.showerror("Error", "Unable to fetch weather data.")

def get_weather_and_display():
    user_input = location_entry.get()
    weather_data = get_weather(api_key, user_input)
    display_weather(weather_data)

# GUI setup
app = tk.Tk()
app.title("Weather Forecast")

# Widgets
location_label = tk.Label(app, text="Enter the city or location:")
location_entry = tk.Entry(app, width=30)
get_weather_button = tk.Button(app, text="Get Weather", command=get_weather_and_display)
result_label = tk.Label(app, text="")

# Widget placement
location_label.grid(row=0, column=0, padx=10, pady=10)
location_entry.grid(row=0, column=1, padx=10, pady=10)
get_weather_button.grid(row=1, column=0, columnspan=2, pady=10)
result_label.grid(row=2, column=0, columnspan=2, pady=10)

# Start the GUI event loop
app.mainloop()
