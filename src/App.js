import React, { Component } from 'react';
import './App.css';

//custom components
import CreatePost from './components/CreatePost'

class App extends Component {
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
    this.setState({
      posts: [...posts, sentPost]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Reddit</h1>
        <CreatePost
          title={this.state.title}
          content={this.state.content}
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
        />
        {this.state.posts.map((post, key) =>
          <div key={key} className={post.voteCount >= 0 ? "post-wrapper" : "post-wrapper grey"}>
              <div>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <p>{post.voteCount}</p>
              </div>
            <button onClick={(e) => this.vote(e, post, "plus")}>Vote Up!</button>
            <button onClick={(e) => this.vote(e, post, "minus")}>Vote Down!</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
