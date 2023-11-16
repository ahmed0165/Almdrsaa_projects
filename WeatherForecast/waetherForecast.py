import requests
import tkinter as tk


#************************api request function**************************

def getApi() :
    api_Key= "fe2955573219b85551bc849f7bb4cd0d"
    input = text_area.get(1.0,"end-1c")
    response = requests.get(f"http://api.weatherstack.com/current?access_key={api_Key}&query={input}")
    data= response.json()
    print(input)
    print(data)


    tepmArea.config(text =data['current']['temperature'])
    humidtyArea.config(text =data['current']['humidity'])
    windArea.config(text =data['current']['wind_speed'])
    pressureArea.config(text =data['current']['pressure'])
    precipiationArea.config(text =data['current']['precip'])
     

#*************************GUI******************************
window = tk.Tk()
window.title("Weather Forecast")
window.geometry("450x300")

text_area = tk.Text(window,height=2,width=35)
text_area.place(x=100,y=10)

btn_search = tk.Button(window,text="search",command=getApi)
btn_search.place(x=400,y=15)

#***********************labels*****************************
location = tk.Label(window,text="Location:",font=34)
location.place(x=20,y=15) 

#temp
tepmreture = tk.Label(window,text="Tepmrature:",font=34)
tepmreture.place(x=20,y=70)
tepmArea = tk.Label(window,text="",font=34)
tepmArea.place(x=120,y=70)

#humdity
humidty = tk.Label(window,text="Humidity:",font=34)
humidty.place(x=20,y=110) 
humidtyArea = tk.Label(window,text="",font=34)
humidtyArea.place(x=120,y=110) 


#windspeed
windSpeed = tk.Label(window,text="Wind speed:",font=34)
windSpeed.place(x=20,y=150) 
windArea = tk.Label(window,text="",font=34)
windArea.place(x=120,y=150) 

#pressure
pressure = tk.Label(window,text="Pressure:",font=34)
pressure.place(x=20,y=190)
pressureArea = tk.Label(window,text="",font=34)
pressureArea.place(x=120,y=190) 

#preciption
precipiation = tk.Label(window,text="Precipiation:",font=34)
precipiation.place(x=20,y=230) 
precipiationArea = tk.Label(window,text="",font=34)
precipiationArea.place(x=120,y=230) 


window.mainloop()