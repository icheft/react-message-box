import { useState } from 'react';

// import trim from 'trim';

const MessageBox = ({ db }) => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const onChange = (e) => {
        setMessage(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault(); // prevent page from being refreshed
        let dbCon = db.database().ref('/messages');
        var keyRef = dbCon.push({
            name: name,
            message: message,
            time: new Date().toLocaleString('en-CA', {
                timeZone: 'Asia/Taipei',
            }),
        });
        console.log(keyRef.key);
        setName('');
        setMessage('');
    };

    return (
        <div className="box">
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input is-warning"
                            placeholder="Your name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                        ></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea
                            className="textarea is-warning"
                            placeholder="What do you want to say?"
                            onChange={onChange}
                            rows="5"
                            value={message}
                        ></textarea>
                    </div>
                </div>
                <br></br>
                <button className="button is-primary is-light">Submit</button>
            </form>
        </div>
    );
};

export default MessageBox;
