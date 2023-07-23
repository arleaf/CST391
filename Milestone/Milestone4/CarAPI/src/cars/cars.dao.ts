import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Car } from "./cars.model";
import { carQueries } from './cars.queries';

export const getCars = async () => {
    return execute<Car[]>(carQueries.getCars, []);
};

export const getCarsByMake = async (makeName: string) => {
    return execute<Car[]>(carQueries.getCarsByMake, [makeName]);
};

export const getCarsByCarId = async (albumId: number) => {
    return execute<Car[]>(carQueries.getCarsByCarId, [albumId]);
};

export const createCar = async (car: Car) => {
    return execute<OkPacket>(carQueries.createCar,
        [car.make, car.model, car.year, car.sold]);
};

export const updateCar = async (car: Car) => {
    return execute<OkPacket>(carQueries.updateCar,
        [car.make, car.model, car.year, car.sold, car.carId]);
};

export const deleteCar = async (carId: number) => {
    return execute<OkPacket>(carQueries.deleteCar, [carId]);
};
