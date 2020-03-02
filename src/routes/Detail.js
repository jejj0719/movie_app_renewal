import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <div className="detail_container">
          <div className="poster">
            <img src={location.state.poster} alt={location.state.title} />
          </div>
          <div className="detail_text">
            <div className="detail_title">{location.state.title}</div>
            <ul className="detail_genres">
              {location.state.genres.map((detail_genre, i) => (
                <li className="detail_map_genre" key={i}>
                  {detail_genre}
                </li>
              ))}
            </ul>
            <div className="detail_summary">{location.state.summary} </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
