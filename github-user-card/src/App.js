import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserCard from './UserCard';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    users:{},
    followers:[]
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/ampers-and')
      // .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({users: res.data});
        console.log(this.state.users)
      })
      .catch(err => console.log(err));

    axios
      .get('https://api.github.com/users/ampers-and/followers')
      .then(res => {
        console.log(res.data);
        this.setState({followers: res.data});
        console.log(this.state.followers)
      })
      .catch(err => console.log(err));
  }


  render(){
    return (
      <div className='App'>
        <h1 className='title'>
          Github Users
        </h1>
        <section className="user-list grid-view">
            <UserCard users={this.state.users}/>
              {this.state.followers.map(user => (
                  <UserCard users={user}/>
              ))}
        </section>
      </div>
    );
  }
}

export default App