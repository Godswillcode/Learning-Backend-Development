import crypto from "crypto";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export const handleResponse = (res, statusCode, message, data, token) => res.status(statusCode).json({
    message,
    data,
    token
});

export const generationToken = () => 
jwt.sign(payload, process.env.TOKEN_PASSWORD);

export const decodeToken = (token) =>
jwt.decode(token, process.env.TOKEN_PASSWORD);

export const generateStaffPassword = () => 
crypto.randomBytes(10).toString("hex");

export const generateOTP = () => Math.floor(1000000 + Math.random() * 900000);

export const generationResetToken = () => crypto.randomBytes(32).toString("hex");

export const validate = (req, res, next) => {
    const error = validationResult(req);
    if(errors.isEmpty()) {
        return next;
    }
}

// const extra