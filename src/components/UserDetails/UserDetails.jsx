import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name,website, email, phone} = user;
  return (
    <div>
      <h2>Details about user: {name}</h2>
      <h2>Website:{website}</h2>
      <h2>Email:{email}</h2>
      <h2>Phone:{phone}</h2>
    </div>
  );
};

export default UserDetails;
