import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
    test.beforeEach(async ({ request: defaultRequest }) => {
        const responseLogin = await defaultRequest.post('/api/auth/signin', {
            data: {
                email: process.env.DEFAULT_USER_EMAIL,
                password: process.env.DEFAULT_USER_PASSWORD,
            },
        });
        expect(responseLogin.status()).toBe(200);
        const responseBody = await responseLogin.json();
        expect(responseBody.data.userId).toBe(366866);
    });

    test('Check adding a new car', async ({ request: defaultRequest }) => {
        const response = await defaultRequest.post('/api/cars', {
            data: {
                carBrandId: 1,
                carModelId: 3,
                mileage: 77777,
            },
        });
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.data).toMatchObject({
            id: expect.any(Number),
            brand: 'Audi',
            model: 'Q7',
            mileage: 77777,
            carBrandId: 1,
            carModelId: 3,
        });
    });

    test('Check 400 Error when adding a new car with missing mileage key', async ({
        request: defaultRequest,
    }) => {
        const response = await defaultRequest.post('/api/cars', {
            data: {
                carBrandId: 1,
                carModelId: 3,
            },
        });
        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({
            status: 'error',
            message: 'Mileage is required',
        });
    });

    test('Check 404 Error when adding a new car with not existing brand', async ({
        request: defaultRequest,
    }) => {
        const response = await defaultRequest.post('/api/cars', {
            data: {
                carBrandId: 999,
                carModelId: 3,
                mileage: 77777,
            },
        });
        expect(response.status()).toBe(404);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({
            status: 'error',
            message: 'Brand not found',
        });
    });

    test('Check deletion of an existing car', async ({
        request: defaultRequest,
    }) => {
        const addCarResponse = await defaultRequest.post('/api/cars', {
            data: {
                carBrandId: 1,
                carModelId: 2,
                mileage: 99999,
            },
        });
        const addCarResponseBody = await addCarResponse.json();
        const addedCarId = addCarResponseBody.data.id;
        const carIdToDelete = addedCarId;
        const deleteResponse = await defaultRequest.delete(
            `/api/cars/${carIdToDelete}`,
        );
        expect(deleteResponse.status()).toBe(200);
        const deleteResponseBody = await deleteResponse.json();
        expect(deleteResponseBody.data.carId).toEqual(carIdToDelete);
        expect(deleteResponseBody.status).toEqual('ok');
    });
});
