import React from "react";
import Search from "./Search";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "../style/video.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  handleSubmit = async termFromSearchBar => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="main">
        <Search handleFormSubmit={this.handleSubmit} />
        <div className="content">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

