import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { AnySchema, ValidationOptions } from 'joi';

export const validationHandler = (
  schema: AnySchema,
  type: ValidationRequestType,
  customOptions: ValidationOptions = {},
) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const value = req[type];
    const { error } = schema.validate(value, customOptions);

    if (error) {
      res.status(httpStatus.BAD_REQUEST).json();
      return next();
    }
    return next();
  };
};

export enum ValidationRequestType {
  BODY = 'body',
}
