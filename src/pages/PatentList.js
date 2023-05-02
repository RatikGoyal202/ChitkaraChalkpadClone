import React from 'react';
import './patent.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        process.env.PUBLIC_URL + '/images/s6.jpg',
        process.env.PUBLIC_URL + '/images/s2.jpg',
        process.env.PUBLIC_URL + '/images/s3.jpg',
        process.env.PUBLIC_URL + '/images/s4.jpg',
        process.env.PUBLIC_URL + '/images/s5.jpg',
      ],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex:
          prevState.currentIndex === prevState.images.length - 1
            ? 0
            : prevState.currentIndex + 1,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { images, currentIndex } = this.state;
    return (
      <div className="animation-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="animation-image"
        />
      </div>
    );
  }
}

export default App;