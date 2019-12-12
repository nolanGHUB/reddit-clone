import React, { Component } from 'react'

//custom components
import CreatePost from './CreatePost'
import PostList from './PostList';

//custom fontawesome
import 'font-awesome/css/font-awesome.min.css';

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      content: "",
      author: "Steve Jobs(From the grave)",
      voteCount: 0,
      posts: [{
        title: "this is a post!",
        content: "Post content - Post Content - Post content - Post Content - Post content - Post Content",
        author: "-Somebody",
        voteCount: 0,
      }],
    }
  }

  onContentChange = (e) => {
    const name = e.target.name;
    const content = e.target.value;
    this.setState({
      [name]: content
    })
  }

  postSubmit = (e) => {
    e.preventDefault();
    const posts = this.state.posts
    const newPost = {
      author: this.state.author,
      content: this.state.content,
      title: this.state.title,
      voteCount: 0
    }
    posts.push(newPost)

    this.setState({
      posts,
      content: "",
      title: ""
    })
  }

  vote = (e, sentPost, operator) => {
    e.preventDefault();
    const posts = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
    // const posts2 = this.state.posts.map(
    //   checkPost =>
    //     if (checkPost.title === sentPost.title)
    //     checkPost.voteCount++
    // )

    switch (operator) {
      case "plus":
        sentPost.voteCount++
        break;
      case "minus":
        sentPost.voteCount--
        break;
      default:
        console.error("Something occured in vote function - app.js")
    }

    posts.push(sentPost)
    posts.sort((a, b) => b.voteCount - a.voteCount);

    this.setState({
      posts
    })
  }

  render() {
    return (
      <div>
        <h1>Reddit</h1>
        <CreatePost
          title={this.state.title}
          content={this.state.content}
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
        />
        <PostList
          posts={this.state.posts}
          vote={this.vote}
        />
      </div>
    )
  }
}

export default Post