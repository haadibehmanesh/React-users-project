import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";

const User = (props) => {
  let params = useParams();
  const [user, setUser] = useState({});
  const userId = params.id;
  console.log(queryString.parse(useLocation().search));
  useEffect(() => {
    async function fetchData() {
      // You can await here
      //console.log(params.id);
      const response = await axios.get(`https://reqres.in/api/users/${userId}`);
      //console.log(response);

      setUser(response.data.data);
      // ...
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <img
          alt=''
          src={user.avatar}
          style={{ borderRadius: "50%", width: "100%" }}
        />

        <h4>{user.first_name}</h4>
        <h4>{user.last_name}</h4>
      </div>
    </>
  );
};

export default User;
