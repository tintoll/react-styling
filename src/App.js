import React, { Component } from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';
import Button from './components/Button';
import StyledButton from './components/StyledButton'

const cx = classNames.bind(styles);
console.log(styles);

class App extends Component {
  render() {
    const isBlue = false;
    return (
      <div>
        <StyledButton big>버튼</StyledButton>
      </div>

    );
  }
}

export default App;
