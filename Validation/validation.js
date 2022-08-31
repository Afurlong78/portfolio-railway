const Joi = require("joi");

const contactValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(4).required().email(),
    subject: Joi.string().min(4).required(),
    message: Joi.string().min(4).required(),
  });

  return schema.validate(data);
};

module.exports.contactValidation = contactValidation;
