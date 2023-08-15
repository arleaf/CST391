import React, { useEffect, useState } from "react";
import Card from './Card';
import './App.css';
import SearchForm from './SearchForm';
import dataSource from "./dataSource";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchCar from "./SearchCar";
import NavBar from "./NavBar";
import EditCar from "./EditCar";

const App = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [carList, setCarList] = useState([]);
    const [currentlySelectedCarId, setCurrentlySelectedCarId] = useState(0);

    let refresh = false;

    const updateSearchResults = (phrase) => {
        console.log('phrase is ', phrase);
        setSearchPhrase(phrase);
    }

    const updateSingleCar = (car, navigate, uri) => {
        console.log('Update Single car = ', car);
        var indexNumber = 0;
        for (var i = 0; i < carList.length; ++i) {
            if (carList[i].carId === car) indexNumber = i;
        }
        setCurrentlySelectedCarId(indexNumber);
        let path = uri + indexNumber;
        console.log('path', path);
        navigate(path);
    };

    useEffect(() => {
        loadCars();
    }, [refresh]);

    const loadCars = async () => {
        const response = await dataSource.get('/cars');
        setCarList(response.data);
    }

    const onNewCar = (navigate) => {
        loadCars();
        navigate("/");
    }


    console.log('carList ', carList);
    const renderedList = carList.filter((car) => {
        if (car.make.toLowerCase().includes(searchPhrase.toLowerCase()) || car.model.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === '') {
            return true;
        }
        return false;
    });
    console.log('renderedList ', renderedList);
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <SearchCar
                            updateSearchResults={updateSearchResults}
                            carList={renderedList}
                            updateSingleCar={updateSingleCar} />
                    }
                />
                <Route exact path='/new' element={<EditCar onNewCar={onNewCar} />} />
                <Route exact path='/edit/:carId' element={<EditCar onNewCar={onNewCar} car={carList[currentlySelectedCarId]} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;