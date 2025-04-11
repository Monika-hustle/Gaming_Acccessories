import React, { useState } from "react";
import "./MyOrders.css";

const orders = [
  {
    orderId: "138475542022820608",
    supplier: "Tehzeeb Enterprises",
    soldTo: "Raja",
    product: {
      name: "EpsonHomeCinema4010",
      deliveryDate: "11 April, 2025",
      status: "Shipped",
      image: "./EpsonHomeCinema4010.jpeg",
    },
  },
  {
    orderId: "135791568387737920",
    supplier: "REVERENCE",
    soldTo: "Ponselvi",
    product: {
      name: "GamingKeyboard",
      deliveryDate: "30 March, 2025",
      status: "Delivered",
      image: "./GamingKeyboard_5.jpeg",
    },
  },
  {
    orderId: "135781568686547879",
    supplier: "Surya Traders",
    soldTo: "Sam",
    product: {
      name: "VirtualRealityHeadsets",
      deliveryDate: "15 January, 2025",
      status: "Delivered",
      image: "./VirtualRealityHeadsets.jpeg",
    },
  },
  {
    orderId: "135098568567737940",
    supplier: "Gaming club",
    soldTo: "Karthi",
    product: {
      name: "GamingChair",
      deliveryDate: "3 june, 2025",
      status: "Ordered",
      image: "./GamingChair.jpeg",
    },
  },
  {
    orderId: "135098560757745340",
    supplier: "RK Traders",
    soldTo: "Abdul",
    product: {
      name: "Touchpad",
      cancelDate: "3 june, 2025",
      status: "Cancelled",
      image: "./Touchpad_5.jpeg",
    },
  },
  {
    orderId: "135094320517984340",
    supplier: "Ambay Enterprises",
    soldTo: "Kayal",
    product: {
      name: "Capco WonderGate GamingConsole",
      deliveryby: "3 june, 2025",
      status: "Exchange",
      image: "./Capco WonderGate gaming console.jpeg",
    },
  },
  {
    orderId: "135643320017908240",
    supplier: "SS Traders",
    soldTo: "Sanjay",
    product: {
      name: "OpticalMouse",
      deliveryby: "3 june, 2025",
      status: "Return",
      image: "./OpticalMouse_2.jpeg",
    },
  },
];

const MyOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter((order) => {
    const term = searchTerm.toLowerCase();
    return (
      order.orderId.toLowerCase().includes(term) ||
      order.soldTo.toLowerCase().includes(term) ||
      order.product.name.toLowerCase().includes(term)
    );
  });

  return (
    <div className="my-orders">
      <h2 className="myorders-title">My Orders</h2>
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by Customer, Product, or Order ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filters">
          <button className="active">All</button>
          <button>Ordered</button>
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="no-results">No orders match your search.</p>
      ) : (
        filteredOrders.map((order, index) => (
          <div key={index} className="myorder-container">
            <p><strong>Order ID:</strong> {order.orderId}</p>
            <p><strong>Supplier:</strong> {order.supplier}</p>
            <p><strong>Sold to:</strong> {order.soldTo}</p>

            <div className="myorder-product-details">
              <img src={order.product.image} alt={order.product.name} />
              <div>
                <h3>{order.product.name}</h3>
                <p><strong>Delivery by:</strong> {order.product.deliveryDate || order.product.deliveryby || order.product.cancelDate}</p>
                <p className={order.product.status.toLowerCase()}>{order.product.status}</p>
                <p>We are glad you loved the product!</p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
               
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
