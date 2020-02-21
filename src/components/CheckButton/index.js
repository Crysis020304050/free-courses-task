import React, { Component } from 'react';
import styles from './styles.module.css';

class CheckButton extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  renderButton = (className) => {
    return (
      <div className={className + " " + styles.checkButton} onClick={(e) => {
        this.setState({
                        isChecked: !this.state.isChecked
                      });
      }}>

        <img src='./checkMarker.svg' alt='check'/>

      </div>
    );
  };

  render () {

    if (this.state.isChecked) {
      return (
        this.renderButton(styles.checked)
      );
    } else {
      return (
        this.renderButton()
      );
    }

  }
}

export default CheckButton;