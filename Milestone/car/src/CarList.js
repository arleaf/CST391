import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import dataSource from "./dataSource";

const CarList = (props) => {
    const handleSelectionOne = (carId, uri) => {
        console.log('Selected ID is ', carId);
        props.onClick(carId, navigator, uri);
    };
    console.log('props carList ', props);
    const navigator = useNavigate();

    const onDelete = async (carId) => {
        console.log('Selected delete ID is ', carId);
        let response = await dataSource.delete('/cars/' + carId);
        console.log(response);
        console.log(response.data);
        window.location.reload(false);
    }

    const cars = props.carList.map((car) => {
        return (
            <Card
                key={car.carId}
                carId={car.carId}
                carMake={car.make}
                carModel={car.model}
                carYear={car.year}
                carSold={car.sold}
                buttonText='OK'
                onClick={handleSelectionOne}
                onDelete={onDelete}
            />
        );
    });
    return <div className="container">{cars}</div>;
};

export default CarList;