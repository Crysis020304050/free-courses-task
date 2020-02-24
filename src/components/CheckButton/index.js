import React, {Component} from 'react';
import styles from './styles.module.css';
import {updateUsers} from "../CheckedUsersList";

let buttons = [];

export function uncheckUser(user) {
    buttons.forEach(button => {
        if (user.id === button.props.user.id) {
            button.setState({
                isChecked: false,
            })
        }
    });
}

class CheckButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        buttons.push(this);
    }

    renderButton = (className) => {
        return (
            <div className={className + " " + styles.checkButton} onClick={(e) => {
                e.stopPropagation();
                updateUsers(this.props.user);
                this.setState({
                    isChecked: !this.state.isChecked
                });
            }}><img src='./check.png' alt='V'/></div>
        );
    };

    render() {
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