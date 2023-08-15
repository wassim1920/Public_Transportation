import React, { useState } from "react";
import "./card.css";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/fetch";
import { useLocation } from "react-router-dom";


const Card = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const {data , error} = useFetch(`http://127.0.0.1:8000/get/${id}/`)
  
   const [comments, setComments] = useState([
    {
      user: "John Doe",
      avatar:
        "https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      comment: "This place looks amazing!",
    },
    {
      user: "Alice Smith",
      avatar:
        "https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      comment: "Can't wait to stay here!",
    },
    {
      user: "Bob Johnson",
      avatar:
        "https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      comment: "Is there a pool in the apartment?",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        user: "You",
        avatar:
          "https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        comment: newComment,
      };

      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="card">
        <div className="cardDetails">
          <div className="cardImage">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
              alt=""
              className="caImg"
            />
          </div>
          <div className="caDesc">
            <h1 className="caTitle">{data.name}</h1>
            <span className="caDistance">{data.depart} to {data.destination}</span> 
            <span className="caTaxiOp">{data.stations}</span>
            <span className="caSubtitle">
              {data.working_hours}
            </span>
            <span className="caCancelOp">Tarrrriiiiif</span>
          </div>
        </div>
        <div className="commentSection">
          <h3 className="commentTitle">Comments</h3>
          <ul className="commentList">
            {comments.map((comment, index) => (
              <li key={index} className="commentItem">
                <div className="commentUser">
                  <img src={comment.avatar} alt="User Avatar" />
                  <span>{comment.user}</span>
                </div>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
          <div className="addComment">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="commentInput"
            />
            <button className="commentButton" onClick={handleAddComment}>
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
