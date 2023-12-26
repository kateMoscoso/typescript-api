import Joi from 'joi';
import { validationHandler, ValidationRequestType } from '../../../../infrastructure/middlewares/validation-handler';


const createJourneySchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  people: Joi.number().integer().min(1).max(6).required(),
});

export default function createJourneyValidator() {
  return [
    validationHandler(createJourneySchema, ValidationRequestType.BODY),
  ];
}
