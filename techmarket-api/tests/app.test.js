import request from "supertest";

import app from "../index.js";

describe("API",()=>{

it("Debe responder correctamente",async()=>{

const res=await request(app).get("/");

expect(res.statusCode).toBe(200);

});

});