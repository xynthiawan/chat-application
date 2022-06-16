import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{

    //show login form 

    if(!localStorage.getItem('username')) return<LoginForm/>
    return(
        <ChatEngine
             height="100vh"
             projectID="cd69d381-af4b-4128-9162-9d1b31a72210"
             userName={localStorage.getItem('username')}
             userSecret={localStorage.getItem('password')}
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}


export default App;
