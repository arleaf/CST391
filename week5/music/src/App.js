import React, { useState } from "react";
import Card from './Card';
import './App.css';


const App = () => {
    const [albumList, setAlbumList] = useState([
        {
            artistId: 0,
            artist: 'Arctic Monkeys',
            title: 'AM',
            description: "The band's fifth studio album, AM, was released on 9 September 2013.",
            year: 2013,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg/220px-%22AM%22_%28Arctic_Monkeys%29.jpg"
        },
        {
            artistId: 1,
            artist: 'Arctic Monkeys',
            title: 'Favourite Worst Nightmare',
            description: "Favourite Worst Nightmare is the second studio album by English rock band Arctic Monkeys, released on 23 April 2007 by Domino Recording Company.",
            year: 2007,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Favourite_Worst_Nightmare.jpg/220px-Favourite_Worst_Nightmare.jpg"
        },
        {
            artistId: 2,
            artist: 'Drake',
            title: 'Certified Lover Boy',
            description: "Certified Lover Boy is the sixth studio album by Canadian rapper and singer Drake, released on September 3, 2021, by OVO Sound and Republic Records.",
            year: 2021,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/220px-Drake_-_Certified_Lover_Boy.png"
        },
    ]);

    const renderedList = () => {
        return albumList.map((album) => {
            return (
                <Card
                    albumTitle={album.title}
                    albumDescription={album.description}
                    buttonText='OK'
                    imgURL={album.image}
                />
            );
        });
    };
    return <div className="container">{renderedList()}</div>;
};

export default App;