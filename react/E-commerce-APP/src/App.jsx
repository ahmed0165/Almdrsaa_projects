import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
// import Wishlist from "./pages/Wishlist";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import MyAccount from "./pages/MyAccount";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import Wishlist from "./pages/WishList";
import { CartProvider } from "./context/CartContext";
// import JoyStick from "./assets/joyStick.png";
import LCD from "./assets/LCD.png";
import HalfChair from "./assets/HalfChair.png";
import SmallChair from "./assets/SmallChair.png";
import keyBoard from "./assets/keyBoard.png";
import TheNorthCost from "./assets/TheNorthCost.png";
import Gucci from "./assets/Gucci.png";
import RGBCPU from "./assets/RGBCPU.png";
import SmallBookSHelf from "./assets/SmallBookSHelf.png";
import DryFoodDog from "./assets/DryFoodDog.png";
import CanonCamera from "./assets/CanonCamera.png";
import lap from "./assets/lap.png";
import jacket from "./assets/jacket.png";
import shoes from "./assets/shoes.png";
import car from "./assets/car.png";
import jack from "./assets/jack.png";

function App() {
  const products = [
    {
      productId: 1,
      image: LCD,
      alt: "joystick",
      discount: "40%",
      title: "Cart With Flat Discount",
      price: "$120",
      originalPrice: "$160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 2,
      image: keyBoard,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 3,
      image: LCD,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 4,
      image: SmallChair,
      alt: "SmallChair",
      discount: "25%",
      title: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$400",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 5,
      image: HalfChair,
      alt: "HalfChair",
      discount: "25%",
      title: "S-Series Com",
      price: "$370",
      originalPrice: "$400",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 6,
      image: TheNorthCost,
      alt: "thenorthcoast",
      discount: "40%",
      title: "Cart With Flat Discount",
      price: "$120",
      originalPrice: "$160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 7,
      image: Gucci,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 8,
      image: RGBCPU,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 9,
      image: SmallBookSHelf,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 10,
      image: DryFoodDog,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 11,
      image: CanonCamera,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 12,
      image: lap,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 13,
      image: jacket,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 14,
      image: jack,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 15,
      image: shoes,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 16,
      image: car,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
    {
      productId: 17,
      image: LCD,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      rating: 4,
      reviews: 250,
      sold: 500,
      description: "Description for Product 1",
      colors: ["#000", "#FFF", "#F00"],
    },
  ];

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="home"
                element={
                  <ProtectedRoute>
                    <HomePage products={products} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="my-account"
                element={
                  <ProtectedRoute>
                    <MyAccount />
                  </ProtectedRoute>
                }
              />
              <Route
                path="contact"
                element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                }
              />
              <Route
                path="about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route
                path="product/:productId"
                element={
                  <ProtectedRoute>
                    <ProductDetail products={products} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="wishlist"
                element={
                  <ProtectedRoute>
                    <Wishlist />
                  </ProtectedRoute>
                }
              />
              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <MyAccount />
                  </ProtectedRoute>
                }
              />
              <Route
                path="checkout"
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
