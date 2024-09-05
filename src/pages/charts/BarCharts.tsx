import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Chart";

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const BarCharts = () => {
  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[200, 444, 344, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="Products"
            title_2="Users"
            bgColor1={`hsl(260,50%,30%)`}
            bgColor2={`hsl(360,90%,90%)`}
          />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <BarChart
          horizontal={true}
            data_1={[200, 444, 344, 556, 778, 455, 990,636,88,560,744,489]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor1={`hsl(180,40%,50%)`}
            bgColor2=""
            labels={months}
          />
          <h2>Orders throughout the years</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
