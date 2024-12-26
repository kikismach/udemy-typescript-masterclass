import { body, param, ValidationChain } from 'express-validator';
import { Status } from '../../enums/Status';
import { Priority } from '../../enums/Priority';
import { getEnumValues } from '../../utils/enums';
import { validate as isValidUUID } from 'uuid';

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task Title is mandatory')
    .trim()
    .isString()
    .withMessage('Title needs to be in text format')
    .isLength({ min: 1, max: 300 })
    .withMessage('Title max length is 300 characters'),
  body('description')
    .not()
    .isEmpty()
    .withMessage('The task Description is mandatory')
    .trim()
    .isString()
    .withMessage('Description needs to be in text format'),
  body('duedate')
    .not()
    .isEmpty()
    .withMessage('The task Date is mandatory')
    .isISO8601()
    .toDate()
    .withMessage(
      'Invalid Date format, the format should be `ISO8601` (YYYY-MM-DD, YYYYMMDD)',
    ),
  body('status')
    .not()
    .isEmpty()
    .withMessage('The task Status is mandatory')
    .trim()
    .isIn(getEnumValues(Status))
    .withMessage(
      `Status invalid value. Can only be (${getEnumValues(Status).join(', ')})`,
    ),
  body('priority')
    .not()
    .isEmpty()
    .withMessage('The task Priority is mandatory')
    .trim()
    .isIn(getEnumValues(Priority))
    .withMessage(
      `Priority invalid value. Can only be (${getEnumValues(Priority).join(', ')})`,
    ),
];

export const updateStatusValidator: ValidationChain[] = [
  param('id').custom((value) => {
    if (!isValidUUID(value)) {
      throw new Error('The ID param needs to be a valid UUID');
    }
    return true;
  }),
  body('status')
    .not()
    .isEmpty()
    .withMessage('The task Status is mandatory')
    .trim()
    .isIn(getEnumValues(Status))
    .withMessage(
      `Status invalid value. Can only be (${getEnumValues(Status).join(', ')})`,
    ),
];
