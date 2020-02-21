import React, { Component } from 'react';
import styles from './styles.module.css';
import {updateUsers} from "../CheckedUsersList";


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
        updateUsers(this.props.user);
        this.setState({
                        isChecked: !this.state.isChecked
                      });
      }}>

        <img src='./check.png' alt='check'/>

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