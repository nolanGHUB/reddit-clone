import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: "",
      posts: [],
    }
  }

  onChange = (e) => {
    const content = e.target.value;
    this.setState({
      content
    })
  }

  postSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return(
    <div className="App">
        <h1>Reddit</h1>
        <form onSubmit={this.postSubmit}>
          <input
            type="textarea"
            name="content"
            placeholder="POST IT"
            onChange={this.onChange}
            value={this.state.content}
          />
          <input
            type="submit"
            value="POST"
          />
        </form>
    </div>
  );
  }
}

export default App;
