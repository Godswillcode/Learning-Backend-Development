import {check} from 'express-validator';

const validateBody = {
    login: [
        check('email')
        .isEmail()
        .trim()
        .withMessage('email can not be empty'),
        check('role')
        .not()
        .isEmpty()
        .trim()
        .isIn(['admin', 'staff'])
        .withMessage("role must be one of staff or admin "),
        check('oldPassword')
        .not()
        .isEmail()
        .trim()
        .withMessage('password can not be empty')
    ]
}

export default validateBody