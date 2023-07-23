import { Request, RequestHandler, Response } from "express";
import { OkPacket } from "mysql";
import * as CarDao from '../cars/cars.dao';

export const getCars: RequestHandler = async (req: Request, res: Response) => {
    try {
        let cars;
        let carId = parseInt(req.query.carId as string);

        console.log('carId', carId);
        if (Number.isNaN(carId)) {
            cars = await CarDao.getCars();
        } else {
            cars = await CarDao.getCarsByCarId(carId);
        }
        res.status(200).json(
            cars
        );
    } catch (error) {
        console.error('[cars.controller][getCars][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching cars'
        });
    }
};

export const getCarsByMake: RequestHandler = async (req: Request, res: Response) => {
    try {
        const cars = await CarDao.getCarsByMake(req.params.make);

        res.status(200).json(cars);
    } catch (error) {
        console.error('[cars.controller][getCarsByMake][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching Cars'
        });
    }
};


export const createCar: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CarDao.createCar(req.body);

        console.log('req.body', req.body);
        console.log('car', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[cars.controller][createCar][Error] ', error);
        console.log('car create ', req.body);
        res.status(500).json({
            message: 'There was an error when writing cars'

        });
    }
};

export const updateCar: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CarDao.updateCar(req.body);

        console.log('req.body', req.body);
        console.log('car', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[cars.controller][updateCar][Error] ', error);
        console.log('car', req.body);
        res.status(500).json({
            message: 'There was an error when writing cars'
        });
    }
};

export const deleteCar: RequestHandler = async (req: Request, res: Response) => {
    try {
        let carId = parseInt(req.params.carId as string);
        console.log('carId', carId);

        if (!Number.isNaN(carId)) {
            const response = await CarDao.deleteCar(carId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for carId");
        }

    } catch (error) {
        console.error('[cars.controller][deleteCar][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting Cars'
        });
    }
};