import Musician from "../models/Musician.js";
import { StatusCodes } from "http-status-codes";
import NotFoundError from "../errors/not-found.js";
import BadRequestError from "../errors/bad-request.js";
const createMusician = async (req, res) => {
  const { name, lastName, position, location } = req.body;

  const musician = await Musician.create({
    name,
    lastName,
    position,
    location,
  });
  res.status(StatusCodes.CREATED).json({ musician });
};
const deleteMusician = async (req, res) => {
  const { id: musicianId } = req.params;
  const musician = await Musician.findOne({ _id: musicianId });
  if (!musician) {
    throw new NotFoundError(`No musician with id :${musicianId}`);
  }
  await musician.remove();
  res.status(StatusCodes.OK).json({ msg: "musician removed" });
};

const getAllMusicians = async (req, res) => {
  const { position, sort, search, location } = req.query;
  console.log(position);
  const queryObject = {};
  // add stuff based on condition
  if (position !== "all") {
    queryObject.position = position;
  }
  if (location !== "all") {
    queryObject.location = location;
  }

  let results = Musician.find(queryObject);
  const musicians = await results;

  res.status(StatusCodes.OK).json({ count: musicians.length, musicians });
};

const updateMusician = async (req, res) => {
  const { id: musicianId } = req.params;
  const musician = await Musician.findByIdAndUpdate(
    { _id: musicianId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!musician) {
    throw new NotFoundError(`No musician with id :${musicianId}`);
  }
  res.status(StatusCodes.OK).json({ musician });
};
const getSingleMusician = async (req, res) => {
  const { id: musicianId } = req.params;
  const musician = await Musician.findOne({ _id: musicianId });
  if (!musician) {
    throw new NotFoundError(`No musician with id :${musicianId}`);
  }
  res.status(StatusCodes.OK).json({ musician });
};
export {
  createMusician,
  deleteMusician,
  getAllMusicians,
  updateMusician,
  getSingleMusician,
};
