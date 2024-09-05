import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Chart";

const PieCharts = () => {
  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Dougnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["processing", "shipped", "deleverd"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,80%,50%)`,
                `hsl(110,40%,50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fullfillment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["processing", "shipped", "deleverd"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(160,80%,80%)`,
                `hsl(10,80%,50%)`,
                `hsl(50,40%,50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Products category Ratio</h2>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
