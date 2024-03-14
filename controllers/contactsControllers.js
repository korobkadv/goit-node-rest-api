import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import contactsWrapper from "../helpers/contactsWrapper.js";

const getAllContacts = async (req, res) => {
  const result = await contactsService.listContacts();

  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id);
  if (!result) {
    throw HttpError(404, `Not found`);
  }

  res.json({
    message: "Delete success",
  });
};

const createContact = async (req, res) => {
  const result = await contactsService.addContact(req.body);

  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }

  res.json(result);
};

export default {
  getAllContacts: contactsWrapper(getAllContacts),
  getOneContact: contactsWrapper(getOneContact),
  deleteContact: contactsWrapper(deleteContact),
  createContact: contactsWrapper(createContact),
  updateContact: contactsWrapper(updateContact),
};
