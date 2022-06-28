import Musician from "../models/Musician.js";
import { StatusCodes } from "http-status-codes";
import NotFoundError from "../errors/not-found.js";
import BadRequestError from "../errors/bad-request.js";
const createMusician = async (req, res) => {
  const { name, lastName, position, location } = req.body;
  console.log(req.user);
  const musician = await Musician.create({
    name,
    lastName,
    position,
    location,
  });
  res.status(StatusCodes.CREATED).json({ musician });
};
const deleteMusician = async (req, res) => {
  res.send("delete musician");
};
const getAllMusicians = async (req, res) => {
  res.send("getAll musician");
};
const updateMusician = async (req, res) => {
  res.send("update musician");
};
const getSingleMusician = async (req, res) => {
  res.send("get single musician");
};
export {
  createMusician,
  deleteMusician,
  getAllMusicians,
  updateMusician,
  getSingleMusician,
};
