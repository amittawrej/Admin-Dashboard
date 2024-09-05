import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?size=626&ext=jpg&ga=GA1.1.1888043400.1713942114&semt=ais_user";

const orderItems: OrderItemType[] = [
  {
    name: "puma shoes",
    photo: img,
    price: 2000,
    qunatity: 4,
    _id: "jabsjdbjak",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "ajay singh",
    address: "Taj mahal",
    city: "agra",
    state: "UP",
    country: "India",
    pincode: 435372,
    status: "Processing",
    subtotal: 4000,
    discount: 1008,
    shippingCharge: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1008,
    orderItems,
    _id: "lhadkhksa",
  });
  const {
    name,
    address,
    city,
    country,
    state,
    pincode,
    subtotal,
    shippingCharge,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Shipped" ? "Delivered" : "Shipped",
    }));
  };
  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main className="new-product">
        <section style={{
          padding:'2rem'
        }}>
          <h2>Order Items</h2>

          {order.orderItems.map((i) => (
            <ProductCart
              name={i.name}
              photo={i.photo}
              _id={i._id}
              qunatity={i.qunatity}
              price={i.price}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address},${city}, ${state}, ${country} ${pincode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal :{subtotal}</p>
          <p>Shipping Charges: {shippingCharge}</p>
          <p>tax:{tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{"  "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCart = ({ name, photo, price, qunatity, _id }: OrderItemType) => (
  <div className="transaction-product-cart">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price}X{qunatity}=${price * qunatity}
    </span>
  </div>
);

export default TransactionManagement;
