import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  //state--> data
  //state-->loader
  //use effect
  //fetch --> state set -->set state
  return (
    <div>
      <h2>Our Users:{users.length}</h2>
      <p>All users are here.</p>
    </div>
  );
};

export default Users;
