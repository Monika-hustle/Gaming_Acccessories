import React from "react";
import "./OrderDetails.css";

const OrderDetails = () => {
  return (
    <div className="order-details-container">
      {/* Header */}
      <div className="header">
        <button className="back-btn">←</button>
        <h2>ORDER DETAILS</h2>
        <button className="help-btn">HELP</button>
      </div>

      {/* Order Info */}
      <div className="order-info">
        <div className="order-summary">
          <img
            src="./EpsonHomeCinema4010.jpeg"
          
            alt=""
            className=""
          />
          <div>
            <h3>Order #138475542022820608</h3>
            <p>EpsonHomeCinema4010</p>
            <p> • Cash ₹45000</p>
            <p className="return-policy">All issue easy returns</p>
          </div>
        </div>
      </div>

      {/* Order Status */}
      <div className="order-status">
        <h3>On the way</h3>
        <p>Delivery by Fri, 11 Apr</p>

        <div className="status-bar">
          <div className="status-line active"></div>
          <div className="status-circle active"></div>
          <div className="status-line active"></div>
          <div className="status-circle active"></div>
          <div className="status-line"></div>
          <div className="status-circle"></div>
          <div className="status-line"></div>
          <div className="status-circle"></div>
        </div>

        <div className="status-labels">
          <span className="active">Ordered</span>
          <span className="active">Shipped</span>
          <span>Out for Delivery</span>
          <span>Deliverd</span>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="delivery-address">
        <h3>📍 Delivery Address</h3>
        <p><strong>Ponselvi</strong></p>
        <p>
          13\124 A New Street, Azhagiapandiapuram (c\o surya fancy), Balamore
          Road, Azhagiapandiapuram, Nagercoil, Tamil Nadu, 8870930087
        </p>
        <p className="address-warning">Address change unavailable!</p>
      </div>

      {/* Pricing & Payment */}
      <div className="payment-info">
        <h3>Total Product Price</h3>
        <p className="price">₹45000</p>
        <p className="savings">You saved ₹13</p>
        <button className="view-bill">VIEW BILL</button>

        <div className="cod-section">
          <span>💰 Cash On Delivery</span>
          <span className="price">₹45000</span>
        </div>



        {/* Order Info */}
      <div className="order-info">
        <div className="order-summary">
          <img
            src="./CurvedMonitor_5.jpeg"
          
            alt=""
            className=""
          />
          <div>
            <h3>Order #138475542022820608</h3>
            <p>CurvedMonitor</p>
            <p> • Cash ₹45000</p>
            <p className="return-policy">All issue easy returns</p>
          </div>
        </div>
      </div>

      {/* Order Status */}
      <div className="order-status">
        <h3>Deliverd</h3>
        <p>Delivery by Fri, 17 Apr</p>

        <div className="status-bar">
          <div className="status-line active"></div>
          <div className="status-circle active"></div>
          <div className="status-line active"></div>
          <div className="status-circle active"></div>
          <div className="status-line active"></div>
          <div className="status-circle active"></div>
          <div className="status-line active"></div>
          <div className="status-circle active"></div>
        </div>

        <div className="status-labels">
          <span className="active">Ordered</span>
          <span className="active">Shipped</span>
          <span className="active">Out for Delivery</span>
          <span className="active">Deliverd</span>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="delivery-address">
        <h3>📍 Delivery Address</h3>
        <p><strong>Sam</strong></p>
        <p>
          14/456A New Street, Anna Nagar , Balamore
          Road,  Thoothukudi, Tamil Nadu, 8870930087
        </p>
        <p className="address-warning">Address change unavailable!</p>
      </div>

      {/* Pricing & Payment */}
      <div className="payment-info">
        <h3>Total Product Price</h3>
        <p className="price">₹45000</p>
        <p className="savings">You saved ₹20</p>
        <button className="view-bill">VIEW BILL</button>

        <div className="cod-section">
          <span>💰 Cash On Delivery</span>
          <span className="price">₹45000</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderDetails;
