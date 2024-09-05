import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?size=626&ext=jpg&ga=GA1.1.1888043400.1713942114&semt=ais_user";
const img2 =
  "https://img.freepik.com/free-vector/flat-design-omnichannel-illustration_23-2149337640.jpg?size=626&ext=jpg&ga=GA1.1.1888043400.1713942114&semt=ais_user";

const arr: DataType[] = [
  {
    photo: <img src={img} alt="shirt" />,
    name: "T-Shirt",
    price: 400,
    stock: 4,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pant" />,
    name: "Pants",
    price: 900,
    stock: 7,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pant" />,
    name: "Pants",
    price: 900,
    stock: 7,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pant" />,
    name: "Pants",
    price: 900,
    stock: 7,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pant" />,
    name: "Pants",
    price: 900,
    stock: 7,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pant" />,
    name: "Pants",
    price: 900,
    stock: 7,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pant" />,
    name: "Pants",
    price: 900,
    stock: 7,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pant" />,
    name: "Pants",
    price: 900,
    stock: 7,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pant" />,
    name: "Pants",
    price: 900,
    stock: 7,
    action: <Link to="/admin/product/kkwuhksa">Manage</Link>,
  },
];
const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Products",true),
    []
  );

  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product"><FaPlus/></Link>
    </div>
  );
};

export default Products;
