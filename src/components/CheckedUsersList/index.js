import React, {Component} from "react";
import styles from './styles.module.css';
import createUserText from '../../utils/createUserTextWithCommaOrWithoutIt';
import _ from 'lodash';

class CheckedUsersList extends Component {

    renderUsers = () => {
        const usersList = _.clone(this.props.users);
        if (usersList) {
            return usersList.map((user, index) => {
                if (user.isSelected) {
                    return (
                        <div onClick={(e) => {
                            e.stopPropagation();
                            this.props.selectUserByIndex(index)
                        }} key={user.id} className={styles.checkedUsers}>{createUserText(usersList, user, index)}</div>
                    );
                }

            })
        }
    };

    render() {
        return (
            <div className={styles.checkedUsersContainer}>
                <div className={styles.to}>To:</div>
                {this.renderUsers()}
            </div>
        )
    }
}

export default CheckedUsersList;