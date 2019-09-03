import React from "react";
import { Card, Icon } from 'semantic-ui-react'

export default function UserList(props) {

    console.log(props);
    const user = props.users;
    console.log(user);


const extra = (
    <a>
      <Icon name='user' />
      {} Friends
    </a>
  )
  

    return(
        <div>
                <div>
                    {user.login}
                </div>
        </div>
    )
}