import React from 'react'

const PostList = (props) => {
  return (
    <div>
      {props.posts.map((post, key) =>
        <div key={key} className={post.voteCount >= 0 ? "post-wrapper" : "post-wrapper grey"}>
          <div>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>{post.voteCount}</p>
          </div>
          <div className="voteButtons">
            <i className="fa fa-angle-double-up"
              onClick={(e) => props.vote(e, post, "plus")}
            ></i>
            <i className="fa fa-angle-double-down"
              onClick={(e) => props.vote(e, post, "minus")}
            ></i>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostList