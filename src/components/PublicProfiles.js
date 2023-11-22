// DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// COMPONENT
import PublicProfile from "./PublicProfile";
// import Sidebar from "./ProfileSideBar";
// STYLING
import "../css/UserProfile.css"
// APT
const API = process.env.REACT_APP_API_URL;

export default function PublicProfiles() {
  // Profile Index
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
      {/* <Sidebar /> */}
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
