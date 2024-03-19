import Contact from "../models/Contacts.js";
import HttpError from "../helpers/HttpError.js";
import contactsWrapper from "../helpers/contactsWrapper.js";

const getAllContacts = async (req, res) => {
  const result = await Contact.find();

  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, `Contact not found`);
  }

  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const removeContact = await Contact.findById(id);
  if (!removeContact) {
    throw HttpError(404, `Contact not found`);
  }

  const result = await Contact.findByIdAndDelete(id);
  res.json({
    message: removeContact,
  });
};

const createContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body);
  if (!result) {
    throw HttpError(404, `Contact not found`);
  }

  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body);
  if (!result) {
    throw HttpError(404, `Contact not found`);
  }

  res.json(result);
};

export default {
  getAllContacts: contactsWrapper(getAllContacts),
  getOneContact: contactsWrapper(getOneContact),
  deleteContact: contactsWrapper(deleteContact),
  createContact: contactsWrapper(createContact),
  updateContact: contactsWrapper(updateContact),
  updateStatusContact: contactsWrapper(updateStatusContact),
};
