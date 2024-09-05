import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

interface SideBarProps {
  url: string;
  icon: React.ElementType;
  text: string;
  location: Location;
}
const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <SideBar
            url={"/admin/dashboard"}
            icon={RiDashboardFill}
            text={"Dashboard"}
            location={location}
          />

          <SideBar
            url={"/admin/products"}
            icon={RiShoppingBag3Fill}
            text={"Products"}
            location={location}
          />

          <SideBar
            url={"/admin/customer"}
            icon={IoIosPeople}
            text={"Customers"}
            location={location}
          />

          <SideBar
            url={"/admin/transaction"}
            icon={AiFillFileText}
            text={"Transactions"}
            location={location}
          />
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          <SideBar
            url={"/admin/chart/bar"}
            icon={FaChartBar}
            text={"Bar"}
            location={location}
          />

          <SideBar
            url={"/admin/chart/pie"}
            icon={FaChartPie}
            text={"Pie"}
            location={location}
          />

          <SideBar
            url={"/admin/chart/line"}
            icon={FaChartLine}
            text={"Line"}
            location={location}
          />
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          <SideBar
            url={"/admin/app/stopwatch"}
            icon={FaStopwatch}
            text={"Stopwatch"}
            location={location}
          />

          <SideBar
            url={"/admin/app/coupon"}
            icon={RiCoupon3Fill}
            text={"Coupan"}
            location={location}
          />

          <SideBar
            url={"/admin/app/toss"}
            icon={FaGamepad}
            text={"Toss"}
            location={location}
          />
        </ul>
      </div>
    </aside>
  );
};

const SideBar = ({ url, icon: Icon, text, location }: SideBarProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link to={url}>
        <Icon />
        {text}
      </Link>
    </li>
  );
};

export default AdminSidebar;
