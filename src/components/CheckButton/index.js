import React, {Component} from 'react';
import styles from './styles.module.css';

class CheckButton extends Component {

    renderButton = (className) => {
        return (
            <div className={className + " " + styles.checkButton} onClick={(e) => {
                e.stopPropagation();
                this.props.selectUserByIndex(this.props.index);
            }}><img src='./check.png' alt='V'/></div>
        );
    };

    render() {
        if (this.props.user.isSelected) {
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