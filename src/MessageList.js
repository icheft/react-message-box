import { useEffect, useState } from 'react';
import _ from 'lodash';

const MessageList = ({ db }) => {
    const [messages, setMessages] = useState([]);

    // app.on('value', snapshot=> {

    // })
    const getData = (values) => {
        var messagesVal = values;
        var messages = _(messagesVal)
            .keys()
            .map((messageKey) => {
                var cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            })
            .value();

        setMessages(messages);
    };

    useEffect(() => {
        const app = db.database().ref('messages');
        app.on('value', (snapshot) => {
            getData(snapshot.val());
        });
        // someFirestoreAPICall().onSnapshot(snap => {
        //     const data = snap.docs.map(doc => doc.data())
        //     this.setData(data)
        //  });

        //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
        // return () => unsubscribe();
    }, [db]);

    const handleDelete = (key, e) => {
        let dbCon = db.database().ref('/messages');
        dbCon.child(key).remove();
    };
    // const handleEdit = (key, e) => {
    //     let dbCon = db.database().ref('/messages');
    //     dbCon.child(key).remove();
    // };

    return (
        <div>
            {messages.map((message) => (
                <div className="box">
                    <div className="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                {message.name} @ {message.time}
                            </p>
                        </header>
                        <div className="card-content">{message.message}</div>
                        <div className="buttons has-addons is-centered">
                            <button
                                className="button is-danger"
                                onClick={() => handleDelete(message.key)}
                            >
                                Delete
                            </button>
                            {/* <button
                                className="button is-info"
                                onClick={() => handleEdit(message.key)}
                            >
                                Edit
                            </button> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
