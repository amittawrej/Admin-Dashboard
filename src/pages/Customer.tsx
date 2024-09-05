import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";
interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action:ReactElement;
}

const columns: Column <DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
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


const arr:DataType[]=[{
  avatar:(
    <img style={{borderRadius:"50%",}} src={img} alt="shoes"/>
  ),
  name:'ajay bhau',
  email:'aj@gmail.com',
  gender:'male',
  role:'user',
  action:(<button><FaTrash/></button>)

},
{
  avatar:(
    <img style={{borderRadius:"50%",}} src={img2} alt="shoes"/>
  ),
  name:'ajay bhau',
  email:'aj@gmail.com',
  gender:'male',
  role:'user',
  action:(<button><FaTrash/></button>)

}];
const Customer = () => {

  const [data]=useState<DataType[]>(arr)

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Customer",true),
    []
  );
  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Customer;
