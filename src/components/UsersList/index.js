import React, { Component } from 'react';
import Avatar from '../Avatar';
import CoachText from '../CoachText';
import CheckButton from '../CheckButton';
import Spinner from "../Spinner";
import styles from './styles.module.css';
import CheckedUsersList from "../CheckedUsersList";
import {loadJson} from "../../utils/loadJson";
import _ from 'lodash';

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
          users: users.sort((a, b) => a.level - b.level).map(user => ({...user, isSelected: false})),
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

  selectUserByIndex = (index) => {
    const newUsersArray = _.clone(this.state.users);
    newUsersArray[index].isSelected = !newUsersArray[index].isSelected;
    this.setState({
      users: newUsersArray,
    })
  };

  renderUsers = () => {
    const { users } = this.state;
    return users.map((user, index) => (
      <div className={styles.userContainer} key={user.id}>
        <Avatar user={user}/>
        <CoachText user={user}/>
        <CheckButton selectUserByIndex={this.selectUserByIndex} user={user} index={index}/>
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
          <CheckedUsersList selectUserByIndex={this.selectUserByIndex} users={this.state.users}/>
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