import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import MessageList from './MessageList';
import Header from './Header';
import firebase from './base';
import MessageBox from './MessageBox';

function App() {
    // const firebase = 'Hello';
    return (
        <div className="App">
            <Header title="React Message Box" />
            <div className="container">
                <div className="columns ">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageList db={firebase} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageBox db={firebase} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
