import React from "react";
import UserCard from './UserCard';

export default function UserList(props) {

    console.log(props);
    const user = props;
    console.log(user);

    return(
        <div>
                <div>
                    {user.users.login}
                </div>
        </div>
    )
}