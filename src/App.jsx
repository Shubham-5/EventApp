import { useState, useEffect } from "react";
import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import { db } from "./FirebaseConfig";
import { ref, child, get } from "firebase/database";

function App() {
  const [data, setData] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState("");

  useEffect(() => {
    let dbRef = ref(db);
    get(child(dbRef, "/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='App'>
      <Navbar data={data} />
      <div className='layout'>
        <Sidebar />
        {selectedProfile && <Profile {...selectedProfile} />}
        <Events data={data} setSelectedProfile={setSelectedProfile} />
      </div>
    </div>
  );
}

export default App;
