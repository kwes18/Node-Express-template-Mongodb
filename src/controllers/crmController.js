import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContact = (req, res) => {
    //new true returns updated obj
    Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const deleteContact = (req, res) => {
    //new true returns updated obj
    Contact.remove({ _id: req.params.contactID }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        //send msg bc contact deleted
        res.json({ message: 'sucessfully deleted contact' });
    });
}