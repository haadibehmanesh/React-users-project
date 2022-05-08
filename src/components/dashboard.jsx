import axios from "axios";
import { useEffect } from "react";
axios.defaults.headers.common["token"] = localStorage.getItem("token");
const Dashboard = (props) => {
  //const [data, setData] = useState(null);
  useEffect(() => {
    console.log("dashboard");

    const fetchData = async () => {
      // You can await here
      const response = await axios.get(`https://reqres.in/api/unkown`);
      //setData(response.data);
      console.log("data:", response.data);
      console.log("axios:", axios.defaults.headers.common["token"]);
      // ...
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
