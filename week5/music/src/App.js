import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';


const App = () => {
    return (
        <div>

            <h1>Music I like</h1>
            <Card
                albumTitle="AM"
                albumDescription="The band's fifth studio album, AM, was released on 9 September 2013.[145] The album was recorded in Rancho de la Luna in Joshua Tree, California, and features guest appearances from Josh Homme of Queens of the Stone Age, Elvis Costello's drummer Pete Thomas and Bill Ryder-Jones of the Coral."
                imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg/220px-%22AM%22_%28Arctic_Monkeys%29.jpg"
                buttonText="OK"
            />
            <Card
                albumTitle="Favourite Worst Nightmare"
                albumDescription="Favourite Worst Nightmare is the second studio album by English rock band Arctic Monkeys, released on 23 April 2007 by Domino Recording Company."
                imgURL="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Favourite_Worst_Nightmare.jpg/220px-Favourite_Worst_Nightmare.jpg"
                buttonText="OK"
            />
            <Card
                albumTitle="Certified Lover Boy"
                albumDescription="Certified Lover Boy is the sixth studio album by Canadian rapper and singer Drake, released on September 3, 2021, by OVO Sound and Republic Records."
                imgURL="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/220px-Drake_-_Certified_Lover_Boy.png"
                buttonText="OK"
            />
        </div>
    )
}

export default App;