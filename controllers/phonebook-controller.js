const Contact = require('../models/Contact');
const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: phonebook.getPhonebook()
    })
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    let name =req.body.name
    let number=req.body.number
    let contact=new Contact(name,number)
    phonebook.addContact(contact)
    res.redirect("/")
    //res.render('phonebook')
  }
}                                 