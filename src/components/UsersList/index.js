import React, { Component } from 'react';
import Avatar from '../Avatar';
import CoachText from '../CoachText';
import CheckButton from '../CheckButton';
import Spinner from "../Spinner";
import styles from './UsersList.module.css';
import CheckedUsersList from "../CheckedUsersList";
import {loadJson} from "../../utils/loadJson";

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: true,
    };
  }

  loadData = () => {
    setTimeout(() =>{
      loadJson('./users.json').then(users => {
        this.setState({
          users: users.sort((a, b) => a.level - b.level),
          isFetching: false,
        })
      }).catch(err => {
        this.setState({
          error: err,
          isFetching: false,
        })
      })
    }, 1000)
  };

  componentDidMount () {
    this.loadData();
  }

  renderUsers = () => {
    const { users } = this.state;
    return users.map(user => (
      <div className={styles.userContainer} key={user.id}>
        <Avatar user={user}/>
        <CoachText user={user}/>
        <CheckButton user={user}/>
      </div>
    ));
  };

  renderSpinner = () => {
    const { isFetching } = this.state;
    if (isFetching) {
      return <Spinner/>;
    }
  };

  render () {
    return (
      <div className={styles.usersList}>
        {
          <CheckedUsersList/>
        }
        {
          this.renderSpinner()
        }
        <div className={styles.usersContainer}>
          {
            this.renderUsers()
          }
        </div>

      </div>
    );
  }
}

export default UserList;