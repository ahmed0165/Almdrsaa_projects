import React from "react";
import { useCart } from "../context/CartContext";
import Checklist from "../components/Checklist";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (title, quantity) => {
    updateQuantity(title, quantity);
  };

  const handleRemoveItem = (title) => {
    removeFromCart(title);
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto mt-8 max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b border-gray-200">Product</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
              <th className="py-2 px-4 border-b border-gray-200">Quantity</th>
              <th className="py-2 px-4 border-b border-gray-200">Subtotal</th>
              <th className="py-2 px-4 border-b border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.title}>
                <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <span>{item.title}</span>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  ${item.price}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.title, parseInt(e.target.value))
                    }
                    className="w-16 p-1 border rounded"
                    min="1"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  ${item.price * item.quantity}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => handleRemoveItem(item.title)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 p-4 border-t">
        <h2 className="text-2xl font-bold">Total: ${total}</h2>
      </div>
      <Checklist total={total} />
    </div>
  );
};

export default CartPage;
