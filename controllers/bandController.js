import Band from "../models/Band.js";
import Musician from "../models/Musician.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import NotFoundError from "../errors/not-found.js";

const createBand = async (req, res) => {
  const { name, genre, members, subGenre } = req.body;

  if (!members || members.length < 1) {
    throw new BadRequestError("No members provided");
  }

  let bandMembers = [];

  for (const mem of members) {
    const dbMember = await Musician.findOne({ _id: mem._id });
    if (!dbMember) {
      throw new NotFoundError(`No musician with the id: ${mem.musicianId}`);
    }
    const { _id, name, lastName, position } = dbMember;
    const singleMember = { musicianId: _id, name, lastName, position };
    bandMembers = [...bandMembers, singleMember];
  }
  const band = await Band.create({
    name,
    genre,
    subGenre,
    members,
    createdBy: req.user.userId,
  });
  res.status(StatusCodes.CREATED).json({ band });
};

const getAllBands = async (req, res) => {
  const { genre, search, sort } = req.query;
  const queryObject = {
    createdBy: req.user.userId,
  };
  if (genre !== "all") {
    queryObject.genre = genre;
  }
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }
  let results = Band.find(queryObject);

  if (sort === "a-z") {
    results = results.sort("name");
  }
  if (sort === "z-a") {
    results = results.sort("-name");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  results.skip(skip).limit(limit);
  const bands = await results;
  const totalBands = await Band.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalBands / limit);
  res.status(StatusCodes.OK).json({ totalBands, numOfPages, bands });
};

const getSingleBand = async (req, res) => {
  const { id: bandId } = req.params;

  const band = await Band.findOne({ _id: bandId });
  if (!band) {
    throw new NotFoundError(`Band with the id ${bandId} not found`);
  }
  res.status(StatusCodes.OK).json({ band });
};

const getCurrentUserBand = async (req, res) => {
  const bands = await Band.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ bands });
};

const updateBand = async (req, res) => {
  const { id: bandId } = req.params;
  const band = await Band.findByIdAndUpdate({ _id: bandId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!band) {
    throw new NotFoundError(`No band with the id: ${bandId}`);
  }
  res.status(StatusCodes.OK).json({ band });
};

const deleteBand = async (req, res) => {
  const { id: bandId } = req.params;
  const band = await Band.findOne({ _id: bandId });
  if (!band) {
    throw new NotFoundError(`No musician with id :${bandId}`);
  }
  await band.remove();
  res.status(StatusCodes.OK).json({ msg: "band removed" });
};

export {
  createBand,
  getAllBands,
  getSingleBand,
  getCurrentUserBand,
  updateBand,
  deleteBand,
};
