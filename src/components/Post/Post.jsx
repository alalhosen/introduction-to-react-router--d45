import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, id, userId, body } = post;

const navigate=useNavigate();

  const postStyle = {
    border: "3px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };

const handleShowDetail=()=>{
navigate(`/post/${id}`)
}

  return (
    <div style={postStyle}>
      <h2>Title:{title}</h2>
      <p>Post of id:{id}</p>
      <p>{userId}</p>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}><button>Show Details</button></Link>
      <button onClick={handleShowDetail}>Click to see details</button>
    </div>
  );
};

export default Post;
