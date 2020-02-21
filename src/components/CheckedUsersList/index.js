import React, {Component} from "react";
import styles from './styles.module.css';


export function updateUsers(user) {
    if (this.state.users.includes(user)) {
        this.setState({
            users: this.state.users.filter(el => el !== user)
        });
        return;
    }
    this.setState({users: [...this.state.users, user]});
}


class CheckedUsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        updateUsers = updateUsers.bind(this);
    }

    renderUsers = () => {
        const [...users] = this.state.users;
        if (users) {
            return users.map((user) => {
                return (
                    <div key={user.id} className={styles.checkedUsers}>{user.firstName + " " + user.lastName +","}</div>
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