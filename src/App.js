import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {
    const [cards, setCards] = useState([
        {
            id: "Bob 1",
            name: 'Brad Duncan',
            title: 'Project Manager',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZZrR44fHNgg2JS-Tarb6m6Oq1dW_w_5AMQ&usqp=CAU'
        },
        {
            id: 'Bob 2',
            name: 'Rob Wells',
            title: 'Tire Inspector',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZZrR44fHNgg2JS-Tarb6m6Oq1dW_w_5AMQ&usqp=CAU'
        },
        {
            id: 'Bob 3',
            name: 'Lamar Weddell',
            title: 'Caterer',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZZrR44fHNgg2JS-Tarb6m6Oq1dW_w_5AMQ&usqp=CAU'
        }
    ])
    const [showCard, setShowCard] = useState(true)
    const toggleShowCard = () => setShowCard(!showCard)
    const deleteCardHandler = (cardIndex) => {
        const cards_copy = [...cards]
        cards_copy.splice(cardIndex, 1)
        console.log('cards_copy', cards_copy)
        console.log('cards', cards)
        setCards(cards_copy)

    }
    const changeNameHandler = (event, id) => {
        //1. which card
        const cardIndex = cards.findIndex(card => card.id == id)
        //2. make a copy of the cards
        const cards_copy = [...cards]
        //3. change the name of the specific card
        cards_copy[cardIndex].name = event.target.value
        //4. set the cards with the latest version of card copy
        setCards(cards_copy)
    }
    const buttonStyle = {
        backgroundColor: null
    }
    if (cards.length < 3) buttonStyle.backgroundColor = 'lightpink';
    if (cards.length < 2) buttonStyle.backgroundColor = 'red';
    const cardsMarkup = showCard && (
        cards.map((card, index) => <Card
            avatar={card.avatar}
            name={card.name}
            title={card.title}
            key={card.id}
            onDelete={() => deleteCardHandler(index)}
            onChangeName={(event) => changeNameHandler(event, card.id)}
        />)
    )

    return (
        <div className="App">
            <button className="button" style={buttonStyle} onClick={toggleShowCard}>Toggle show/hide</button>
            {cardsMarkup}
        </div>
    );
}

export default App;