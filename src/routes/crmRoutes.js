import {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        //gets all contacts
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)

    //post endpoint new contact to db
    .post(addNewContact);

    //get a specific contact with an ID
    app.route('/contact/:contactID')
        .get(getContactWithID)

    //update an existing contact using an ID
    .put(updateContact)

    //delete a contact using an ID
    .delete(deleteContact);
}

export default routes;