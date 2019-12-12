import React, { Component } from 'react';
import './App.css';

//custom components
import CreatePost from './components/CreatePost'

//custom fontawesome
import 'font-awesome/css/font-awesome.min.css';

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
    // posts.sort((a, b) => b.voteCount - a.voteCount);

    this.setState({
      posts
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
              <i className="fa fa-angle-double-down"
                onClick={(e) => this.vote(e, post, "minus")}
              ></i>
              <i className="fa fa-angle-double-up"
                onClick={(e) => this.vote(e, post, "plus")}
              ></i>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
