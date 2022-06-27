import Band from "../models/Band.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import NotFoundError from "../errors/not-found.js";

const createBand = async (req, res) => {
  const { name, genre } = req.body;
  if (!name || !genre) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const band = await Band.create(req.body);
  res.status(StatusCodes.CREATED).json({ band });
};

export { createBand };
