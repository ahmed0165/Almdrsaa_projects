import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <main className="flex-grow container mx-auto px-6 py-16 text-center  ">
        <h1 className="text-6xl font-semibold text-gray-800">404 Not Found</h1>
        <p className="mt-4 text-gray-600">
          Your visited page not found. You may go home page.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-full"
        >
          Back to home page
        </a>
      </main>

      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Exclusive</h3>
              <p className="mt-2">Subscribe</p>
              <p className="mt-2">Get 10% off your first order</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 p-2 rounded text-black"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">Support</h3>
              <p className="mt-2">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="mt-2">exclusive@gmail.com</p>
              <p className="mt-2">+88015-88888-9999</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Account</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="hover:underline">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="/login" className="hover:underline">
                    Login / Register
                  </a>
                </li>
                <li>
                  <a href="/cart" className="hover:underline">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/wishlist" className="hover:underline">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:underline">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Quick Link</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-use" className="hover:underline">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Download App</h3>
              <p className="mt-2">Save $3 with App New User Only</p>
              <div className="mt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  className="w-32"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Apple_app_store.svg/1024px-Apple_app_store.svg.png"
                  alt="App Store"
                  className="w-32 mt-2"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-black py-4 mt-4">
          &copy; Copyright Rimel 2022. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
