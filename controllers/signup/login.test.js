// const express = require("express");
// const request = require("supertest");

// const login = require("./login");

// const app = express();

// app.get("/api/users/login", login);

// describe("test login users", () => {
//   beforeAll(() => app.listen(3000));
//   afterAll(() => console.log("before Each"));

//   test("login user", async () => {
//     const req = {
//       body: {
//         email: "email@gmail.com",
//         password: "qwerty123",
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn((data) => data),
//     };

//     const response = await request(app).post(
//       "/api/users/login",
//       login(req, res)
//     );

//     expect(response.status).toBe("success");
//     expect(response.code).toBe(200);
//     expect(response.data.token).toBe("test-jwt-token");
//     expect(response.data.user).toBe({
//       email: "email@gmail.com",
//       password: "qwerty123",
//     });
//   });
// });
