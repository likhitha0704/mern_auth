import jwt from 'jsonwebtoken';

const generateToken = async (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

export default generateToken;