import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker'
function App() {
    const [name, setName] = useState('Alan Smith')
    const buttonsMarkup = (
        <div>
            <button className="button button2">YES</button>
            <button className="button button3">NO</button>
        </div>
    )
    const changeNameHandler = (name) => {
        setName(name)
    }
    return (
        <div className="App">
            <button className="button" onClick={() => changeNameHandler('John Doe')}>Change Name</button>
            <Card
                avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZZrR44fHNgg2JS-Tarb6m6Oq1dW_w_5AMQ&usqp=CAU'
                name={name}
                title='International Creative Administrator'
                onChangeName={() => changeNameHandler('Christian Parker')}
            >{buttonsMarkup}
            </Card>



        </div>
    );
}

export default App;
