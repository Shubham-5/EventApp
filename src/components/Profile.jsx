import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import dateFormat from "dateformat";
import { storage } from "../FirebaseConfig";

const Profile = ({ Name, Date, Gender, ID, Location, Time }) => {
  const [img, setImg] = useState("");
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    const starsRef = ref(storage, `${Name}.jpg`);
    // Get the download URL
    setLoding(true);
    getDownloadURL(starsRef)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        setImg(url);
        setLoding(false);
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        console.log(error);
        setLoding(false);
      });
  }, [Name]);

  let formatDate = dateFormat(Date, "dd-mmmm-yy");

  return (
    <div className='profile'>
      <div className='profile-details'>
        <h4>
          {ID || null} <br /> Person Detected
        </h4>
        <div className='profile-sub-details'>
          <div></div>
          <p>Name : {Name || null}</p>
          <p>Location : {Location || null} </p>
          <p>Date : {formatDate}</p>
          <p>Time : {Time}</p>
        </div>
        <p>
          Description : <br /> {Name} detected at {Location} on{" "}
          {dateFormat(Date, "dS mmmm, yy.")}
        </p>
      </div>
      <div className='profile-image'>
        <h4>{Gender}</h4>
        {loading ? (
          <h4>Loading..</h4>
        ) : (
          <img src={img || null} alt='profile image' />
        )}
      </div>
    </div>
  );
};

export default Profile;
