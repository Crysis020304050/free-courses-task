import React, {Component} from 'react';
import styles from './Avatar.module.css';
import ColorHash from 'color-hash'

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
    }

    render() {
        const {firstName, lastName, src} = this.props.user;
        if (this.state.error || src === undefined) {
            const userInitials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
            const colorHash = new ColorHash();
            return (
                <div className={styles.avatarContainer}>
                    <div style={{backgroundColor: colorHash.hex(userInitials)}}>{userInitials}</div>
                </div>
            );
        } else {
            return (
                <div className={styles.avatarContainer}>
                    <img src={src} alt="avatar" onError={(e) => {
                        this.setState({
                            error: `Cannot load picture with src=${src}`,
                        })
                    }}/>
                </div>
            );
        }
    }
}

export default Avatar;