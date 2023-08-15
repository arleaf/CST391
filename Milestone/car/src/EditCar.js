import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";
const EditCar = (props) => {

    let car = {
        make: '',
        model: '',
        year: '',
        sold: ''
    };

    let newCarCreation = true;

    if (props.car) {
        car = props.car;
        newCarCreation = false;
    }

    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState("");
    const [carYear, setCarYear] = useState('');
    const [carSold, setCarSold] = useState('');
    const navigate = useNavigate();

    const updateMake = (event) => {
        setCarMake(event.target.value);
    }
    const updateModel = (event) => {
        setCarModel(event.target.value);
    }
    const updateYear = (event) => {
        setCarYear(event.target.value);
    }
    const updateSold = (event) => {
        setCarSold(event.target.value);
    }



    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        const editedCar = {
            carId: car.carId,
            make: carMake,
            model: carModel,
            year: carYear,
            sold: carSold
        };
        console.log(editedCar);
        saveCar(editedCar);
    };

    const saveCar = async (car) => {
        let response;
        if (newCarCreation === true)
            response = await dataSource.post('/cars', car);
        else
            response = await dataSource.put('/cars', car);
        console.log(response);
        console.log(response.data);
        props.onNewCar(navigate);
    };
    const handleCancel = () => {
        navigate("/");
    }

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>{newCarCreation ? "Create New" : "Edit"} Car</h1>
                <div className="form-group">
                    <label htmlFor="carMake">Car Make</label>
                    <input type="text" className="form-control" id="carMake" placeholder="Enter Car Make" onChange={updateMake} />

                    <label htmlFor="carModel">Car Model</label>
                    <input type="text" className="form-control" id="carModel" placeholder="Enter Car Mdel" onChange={updateModel} />

                    <label htmlFor="carYear">Car Year</label>
                    <input type="text" className="form-control" id="carYear" placeholder="Enter Car Year" onChange={updateYear} />

                    <label htmlFor="carSold">Car Sold</label>
                    <input type="text" className="form-control" id="carSold" placeholder="Is Car Sold?" onChange={updateSold} />
                </div>
                <div align="center">
                    <button type="button" className="btn btn-light" onClick={handleCancel}> Cancel </button>
                    <button type="submit" className="btn btn-primary"> Submit </button>
                </div>
            </form>
        </div>
    )
};
export default EditCar;