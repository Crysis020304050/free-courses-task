import React, { Component } from 'react';
import Avatar from '../Avatar';
import CoachText from '../CoachText';
import CheckButton from '../CheckButton';
import styles from './styles.module.css';
import CheckedUsersList from "../CheckedUsersList";

const users = [
  {
    'id': 1,
    'firstName': 'Test1',
    'lastName': 'Testovich1',
    'level': '1',
    'src': 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png'
  },
  {
    'id': 2,
    'firstName': 'Test2',
    'lastName': 'Testovich2',
    'level': '2',
    'src': 'https://www.moya-planeta.ru/upload/images/xl/19/a7/19a713c5edb6c69c5a0c31b875d732b3.jpg'
  },
  {
    'id': 3,
    'firstName': 'Test3',
    'lastName': 'Testovich3',
    'level': '3',
    'src': 'https://glamusha.ru/uploads/articles/23/petrushka_dlya_lica_v_kosmetologii.jpg'
  },
  {
    'id': 4,
    'firstName': 'Test4',
    'lastName': 'Testovich4',
    'level': '4',
    'src': 'https://cdn.footballua.tv/i/image_650x360/uploads/football-www/novosti/5d31d21d1d8d8_ronaldu.jpeg'
  },
];

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount () {
    this.setState({
                    users: [...users]
                  });
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