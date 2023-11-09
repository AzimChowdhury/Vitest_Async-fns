import crypto from 'crypto';
import { saveTokenToFile } from './utils/io.js';


function log(message) {
    console.log(message);
}

export const generateToken = async (logger) => {
    const token = crypto.randomBytes(32).toString('hex')
    if (logger) logger(token);
    return token;
}

export const storeToken = async (data) => {
    if (!data) throw new Error('No token provided')
    await saveTokenToFile(data, 'data.txt');
}

const data = generateToken(log)