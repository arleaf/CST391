import React from "react";

const Card = (props) => {
    const handleButttonClick = (event, uri) => {
        console.log(props);
        console.log('ID clicked is ' + props.carId);
        props.onClick(props.carId, uri);
    }
    const handleDeleteClick = (event, uri) => {
        console.log(props);
        console.log('ID clicked is ' + props.carId);
        props.onDelete(props.carId);

    }
    return (
        <div className="card" style={{ width: '12rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.carMake} {props.carModel}</h5>
                <p className="card-text"> {props.carYear}</p>
                <p className="card-text"> {props.carSold ? "Sold" : "Not Sold"}</p>
                <button
                    onClick={() => handleButttonClick(props.carId, '/edit/')}
                    className="btn btn-primary">Edit</button>
                <button
                    onClick={() => handleDeleteClick(props.carId)}
                    className="btn btn-primary">Delete</button>
            </div>
        </div>
    );

}
export default Card;