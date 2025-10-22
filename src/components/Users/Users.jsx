import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  //state--> data
  //state-->loader
  //use effect
  //fetch --> state set -->set state
  console.log(users);
  return (
    <div>
      <h2>Our Users:{users.length}</h2>
      <p>All users are here.</p>
      <div>
        {
            users.map(user=>)
        }
      </div>
    </div>
  );
};

export default Users;
