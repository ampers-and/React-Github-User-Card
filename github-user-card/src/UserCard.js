import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function UserList(props) {

    console.log(props);
    const user = props.users;
    console.log(user);

    return(
        <Card>
            <Image src={user.avatar_url} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{user.login}</Card.Header>
            <Card.Meta>
                 <span className='date'>{user.type}</span>
            </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {user.followers} Followers
            </Card.Content>
        </Card>
    )
}