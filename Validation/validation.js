const Joi = require("joi");

const contactValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    subject: Joi.string().min(6).required(),
    message: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

module.exports.contactValidation = contactValidation;
