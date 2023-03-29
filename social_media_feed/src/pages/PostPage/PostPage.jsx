import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import posts from "../../posts";
import Classes from "./index.module.css";
const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setProduct] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id.toString() === postId);
    if (!post) navigate("/not-found", { replace: true });
    setProduct(post);
  }, [postId, navigate]);
  console.log(postId);
  if (post)
    return (
      <div className={Classes.wrapper} key={post.id}>
        <img className={Classes.img} src={post.userImage} alt={post.username} />
        <div>{post.username}</div>
        <div>{post.timestamp}</div>
        <div>{post.text}</div>
        <div className={Classes.comments}>
          {post.comments.forEach((comment) => {
            return (
              <div className={Classes.wrapper} key={comment.id}>
                <img
                  className={Classes.img}
                  src={comment.userImage}
                  alt={comment.username}
                />
                <div>{comment.username}</div>
                <div>{comment.timestamp}</div>
                <div>{comment.text}</div>
              </div>
            );
          })}
        </div>
        <Link to={-1}>Go Back</Link>
      </div>
    );
};
export default PostPage;
