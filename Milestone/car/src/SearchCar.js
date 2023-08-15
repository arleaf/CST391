import React from "react";
import SearchForm from "./SearchForm";
import CarList from "./CarList";

const SearchCar = (props) => {
    console.log('props with update single car ', props);
    return (
        <div className="container">
            <SearchForm onSubmit={props.updateSearchResults} />
            <CarList carList={props.carList} onClick={props.updateSingleCar} />
        </div>
    );
};

export default SearchCar;