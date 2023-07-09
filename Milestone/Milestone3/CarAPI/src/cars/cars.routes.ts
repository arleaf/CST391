import { Router } from 'express';
import * as CarsController from './cars.controller';

const router = Router();

router
    .route('/cars')
    .get(CarsController.getCars);

router
    .route('/cars/:make')
    .get(CarsController.getCarsByMake);

router
    .route('/cars')
    .post(CarsController.createCar);

router
    .route('/cars')
    .put(CarsController.updateCar);

router
    .route('/cars/:carId')
    .delete(CarsController.deleteCar);


export default router;