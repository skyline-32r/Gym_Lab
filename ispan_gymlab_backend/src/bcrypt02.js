import bcrypt from "bcryptjs";

// let hash = "$2a$10$.LJKZejhJGLMl1Ln6DTaEe8.NbxQKx3CeyOeh0X6ZKvMWYH/IykKC";
let hash = "$2a$10$7gUk96OeosoZ.c6AI8oLrOJWjD1dCvYkONylXNFlDP.v3XzDQjy.W"
let compareResult = bcrypt.compareSync("team1", hash);

console.log(compareResult);
