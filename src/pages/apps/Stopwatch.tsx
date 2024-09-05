import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (timeInSecond: number) => {

  const hours = String(Math.floor(timeInSecond / 3600));
  const minutes = String(Math.floor((timeInSecond % 3600) / 60));
  const seconds = String(timeInSecond % 60);

  const hoursInString = hours.toString().padStart(2, "0");
  const minutesInString = minutes.toString().padStart(2, "0");
  const secondsInString = seconds.toString().padStart(2, "0");

  return `${hoursInString}:${minutesInString}:${secondsInString}`;
};

const Stopwatch = () => {
  const [time,setTime]=useState<number>(0);
  const [isRunning,setIsRunning]=useState<boolean>(false);

  useEffect(() => {
    let intervalID:number;

    if(isRunning){
      intervalID=setInterval(()=>{
        setTime((prev)=>prev+1)
      },1000);
    }
  
    return () => {
      clearInterval(intervalID);
    }
  }, [isRunning])
  
  const resetHandler=()=>{
    setTime(0);
    setIsRunning(false);
  }
  return (
    <div className="admincontainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={()=>setIsRunning((prev)=>!prev)}>{isRunning ? 'Stop':'Start'}</button>
            <button onClick={resetHandler}>Restart</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
