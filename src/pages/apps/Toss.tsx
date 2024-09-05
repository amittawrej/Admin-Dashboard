import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const Toss = () => {
  const [angel, setAngle] = useState(0);

  const flipCoin = () => {
    if (Math.random() > 0.5) {
      setAngle((prev) => prev + 180);
    } else {
      setAngle((prev) => prev + 360);
    }
  };
  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Toss</h1>
        <section>
          <article
            className="tosscoin"
            onClick={flipCoin}
            style={{ transform: `rotateY(${angel}deg)` }}
          >
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;
