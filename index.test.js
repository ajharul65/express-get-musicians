// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");
const { timeStamp } = require('console');


describe('./musicians endpoint', () => {
    // Write your tests here
    test("Testing musicians endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
    })

    test("Testing musicians endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })
    
    // test("Testing musicians endpoint", async () => {
    //     // Sends request to `/bakedGoods` endpoint
    //     const response = await request(app).get("/musicians/:id");
    //     expect(response.statusCode).toBe(200);
    // })

    test("should respond with correct data", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians/1");
        expect(response.statusCode).toBe(200);
        const responseData = JSON.parse(response.text);
        // Write expect tests here
        expect(responseData).toEqual(expect.objectContaining({
            "id": 1,
            "name": "Mick Jagger",
            "instrument": "Voice"
          }))
    })




    
})