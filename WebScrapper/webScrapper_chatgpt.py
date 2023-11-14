import requests
from bs4 import BeautifulSoup

def scrape_books():
    # URL of the website to scrape
    url = "https://books.toscrape.com/"
    
    # Send a GET request to the URL
    response = requests.get(url)
    
    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content of the page
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find all book containers on the page
        book_containers = soup.find_all('article', class_='product_pod')
        
        # Iterate through each book container and extract information
        for book in book_containers:
            # Extract title
            title = book.h3.a['title']
            
            # Extract rating
            rating = book.p['class'][1]  # Assumes that the second class represents the rating
            
            # Extract price
            price = book.select_one('div p.price_color').text
            
            # Print the information
            print(f"Title: {title}\nRating: {rating}\nPrice: {price}\n{'='*30}")

    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")

if __name__ == "__main__":
    scrape_books()
