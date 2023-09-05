import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { user, isLoggedIn } = auth;
  console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn === false) {
      return navigate("/login");
    }
  }, [isLoggedIn]);

  return <div className="profile_page">Name : {user.name}</div>;
}

export default ProfilePage;
