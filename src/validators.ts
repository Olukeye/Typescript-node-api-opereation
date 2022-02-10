import Joi from '@hapi/joi';
import joiobjectid from 'joi-objectid';

export const ObjectIdValidator = joiobjectid(Joi);

export default {
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().min(4).trim(),

  string: Joi.string().trim(),
  lowerCaseString: Joi.string().trim().lowercase(),
  rating: Joi.number().min(0).max(5),
  boolean: Joi.boolean(),
  name: Joi.string().min(2).trim(),
  gender: Joi.string().trim().valid('male', 'female', 'others'),
  telephone: Joi.string().min(10).trim(),
  address: Joi.string().min(7).trim(),
  username: Joi.string().trim(),
  coordinates: Joi.object({
    longitude: Joi.number().min(-180).max(180).required(),
    latitude: Joi.number().min(-90).max(90).required(),
  }),

  // TODO validate this as urls
  url: Joi.string().trim(),

  domain: Joi.string()
    .trim()
    .lowercase()
    .regex(/^[_A-z0-9]*((-)*[_A-z0-9])*$/)
    .message('domain must not contain spaces or special characters'),

  number: Joi.number().positive(),
  date: Joi.date(),
  array: Joi.array(),

  id: ObjectIdValidator().message('invalid ID').trim(),
};
