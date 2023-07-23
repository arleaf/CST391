export const carQueries = {
    getCars:
        `SELECT id as carId, make as make, model as model, year as year, sold as sold from cars.cars`,
    getCarsByMake:
        `SELECT id as carId, make as make, model as model,year as year, sold as sold from cars.cars
	   WHERE cars.cars.make = ?`,
    getCarsByCarId:
        `SELECT id as carId, make as make, model as model, year as year, sold as sold from cars.cars
	   WHERE cars.cars.id = ?`,
    createCar:
        `INSERT INTO cars.cars(make, model, year, sold) VALUES(?,?,?,?)`,
    updateCar:
        `UPDATE cars.cars SET make=?, model=?, year=?, sold=? WHERE id = ?`,
    deleteCar:
        `DELETE FROM cars.cars where id = ?`,
}