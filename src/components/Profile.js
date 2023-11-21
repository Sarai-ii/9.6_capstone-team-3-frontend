import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PublicProfile from "./PublicProfile";
const API = process.env.REACT_APP_API_URL;

export default function Profile() {
  const [users, setUsers] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users", error));
  }, []);

  const user = users.find((user) => user.id === parseInt(userId));

  return (
    <div>
      {user ? (
        <ul>
          <PublicProfile key={user.id} user={user} />
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
