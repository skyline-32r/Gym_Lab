import jwt from "jsonwebtoken";

const SECRET = "itsasecret";

// const token = jwt.sign({ name: "jayce", age: 30 }, SECRET);
// console.log(token);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamF5Y2UiLCJhZ2UiOjMwLCJpYXQiOjE2OTUwOTE1NDd9.98aTodEZlDll8_F6NpymmEqN6YXnUbkYAFszX0SfAhc";

const payload = jwt.verify(token, SECRET);

console.log(payload);
