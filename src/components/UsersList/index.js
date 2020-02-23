import React, { Component } from 'react';
import Avatar from '../Avatar';
import CoachText from '../CoachText';
import CheckButton from '../CheckButton';
import styles from './styles.module.css';
import CheckedUsersList from "../CheckedUsersList";
import {loadJson} from "../../utils/loadJson";

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      error: null,
    };
  }

  loadData = () => {
    loadJson('./users.json').then(users => {
      this.setState({
        users: users
      })
    }).catch(err => {
      this.setState({
        error: err,
      })
    })
  };

  componentDidMount () {
    this.loadData();
  }

  renderUsers = () => {
    const { users } = this.state;
    return users.map(user => (
      <div className={styles.userContainer} key={user.id}>
        <Avatar src={user.src}/>
        <CoachText user={user}/>
        <CheckButton user={user}/>
      </div>
    ));
  };

  render () {
    return (
      <div className={styles.usersList}>
        {
          <CheckedUsersList/>
        }
        {
          this.renderUsers()
        }
      </div>
    );
  }
}

export default UserList;