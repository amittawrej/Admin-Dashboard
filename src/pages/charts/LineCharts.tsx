import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Chart"

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const LineCharts = () => {
  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[200, 444, 344, 556, 778, 455, 990,456,232,678,346,235]}
            label="Users"
            backgroundColor="rgba(53,162,255,0.5)"
            borderColor="rgb(53,163,255)"
            labels={months}
          />
          <h2>Active Users</h2>
        </section></main>
    </div>
  )
}

export default LineCharts