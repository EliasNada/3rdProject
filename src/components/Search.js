import React from "react";
import "../style/video.css";

class Search extends React.Component {
  state = {
    videoName: ""
  };
  handleChange = x => {
    this.setState({
      videoName: x.target.value
    });
  };
  handleSubmit = x => {
    x.preventDefault();
    this.props.handleFormSubmit(this.state.videoName);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              onChange={this.handleChange}
              name="video-search"
              type="text"
              value={this.state.videoName}
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
