import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl } from '@material-ui/core';
import Message from './components/Message';
import { db } from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter you name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setMessages([
      ...messages, 
      {
        username: username,
        text: input
      }]);
    setInput('');
  }

  return (
    <div className="App mt-3">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=""/>
      <h3 className="mt-3 mb-3">Welcome to Messenger Chat Clone, { username }.</h3>

      <form className="app__form">

        {/* INPUT */}
        <input
          autoFocus
          placeholder="Type a message..."
          className="input"
          type="text"
          value={ input }
          onChange={ e => setInput(e.target.value) }
        />

        {/* BUTTON */}
        <IconButton
          disabled={ !input }
          variant="contained"
          color="primary"
          type="submit"
          onClick={ sendMessage }
        >
          <SendIcon/>
        </IconButton>

      </form>

      {/* MESSAGES THEMSELVES */}
        {
          messages.map(message => (
            <Message
              username={ username }
              message={ message }
            />
          ))
        }
    </div>
  );
}

export default App;
