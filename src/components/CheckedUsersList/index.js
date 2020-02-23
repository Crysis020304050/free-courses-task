import React, {Component} from "react";
import styles from './styles.module.css';
import {uncheckUser} from '../CheckButton';
import createUserText from '../../utils/createUserTextWithCommaOrWithoutIt';

export function updateUsers(user) {
    if (this.state.users.includes(user)) {
        this.setState({
            users: this.state.users.filter(el => el !== user)
        });
    } else {
        this.setState({users: [...this.state.users, user]});
    }
}

class CheckedUsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        updateUsers = updateUsers.bind(this);
    }

    removeUser = (user) => {
        this.setState({
            users: this.state.users.filter(el => el !== user)
        })
    };

    renderUsers = () => {
        const [...users] = this.state.users;
        if (users) {
            return users.map((user) => {
                return (
                    <div onClick={(e) => {
                        e.stopPropagation();
                        uncheckUser(user);
                        this.removeUser(user);
                    }} key={user.id} className={styles.checkedUsers}>{createUserText(users, user)}</div>
                );
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