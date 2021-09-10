const router = require('express').Router();
let Account = require('../models/account.model');

router.route('/').get((req, res) => {
    Account.find()
        .then(Accounts => res.json(Accounts))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/add').post((req, res) => {

    const fullname = req.body.fullname;
    const nic = req.body.nic;
    const contact = req.body.contact;
    const dob = Date.parse(req.body.dob);
    const purpose = req.body.purpose;
    const gender = req.body.gender;
    const civilStatus = req.body.civilStatus;
    const address = req.body.address;
    const branch = req.body.branch;

    const newAccount = new Account ({
        fullname,
        nic,
        contact,
        dob,
        purpose,
        gender,
        civilStatus,
        address,
        branch
    });

    newAccount.save()
        .then(() => res.json('Account added!'))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/:id').get((req, res) => {
    Account.findById(req.params.id)
        .then(Accounts => res.json(Accounts))
        .catch(err => res.status(400).json('Error:' + err));

});
router.route('/:id').delete((req, res) => {
    Account.findByIdAndDelete(req.params.id)
        .then(Accounts => res.json('Accounts deleted'))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/updob/:id').post((req, res) => {
Account.findById(req.params.id)
.then(account =>{

    account.fullname = req.body.fullname;
    account.nic = req.body.nic;
    account.contact = req.body.contact;
    account.dob = Date.parse(req.body.dob);
    account.purpose = req.body.purpose;
    account.gender = req.body.gender;
    account.civilStatus = req.body.civilStatus;
    account.address = req.body.address;
    account.branch = req.body.branch;


    account.save()
        .then(() => res.json('Account upload!!'))
        .catch(err => res.status(400).json('Error:' + err));

})
.catch(err => res.status(400).json('Error:' + err));

});



module.exports = router;