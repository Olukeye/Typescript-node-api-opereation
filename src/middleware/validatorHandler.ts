import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (err) {
      res.status(400).send(err);
    }
  };

export default validate;
