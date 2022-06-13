import{ ChatEngine }from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{
    return(
        <ChatEngine
             height="100vh"
             projectID="cd69d381-af4b-4128-9162-9d1b31a72210"
             userName="XynthiaWan"
             userSecret="123123"
             renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}
             />}

        />
    );
}


export default App;
