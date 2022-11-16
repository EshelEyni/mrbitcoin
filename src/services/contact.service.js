export const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact
}

const contacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "imgIdx": 0,
        "name": "Ochoa Hyde",
        "gender": "female",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "transactions": []
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "imgIdx": 1,
        "name": "Hallie Mclean",
        "gender": "female",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888",
        "transactions": []
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "imgIdx": 2,
        "name": "Parsons Norris",
        "gender": "male",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495",
        "transactions": []
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "imgIdx": 3,
        "name": "Rachel Lowe",
        "gender": "female",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312",
        "transactions": []
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "imgIdx": 4,
        "name": "Dominique Soto",
        "gender": "male",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258",
        "transactions": []
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "imgIdx": 5,
        "name": "Shana Pope",
        "gender": "female",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082",
        "transactions": []
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "imgIdx": 6,
        "name": "Faulkner Flores",
        "gender": "male",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678",
        "transactions": []
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "imgIdx": 7,
        "name": "Holder Bean",
        "gender": "male",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663",
        "transactions": []
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "imgIdx": 8,
        "name": "Rosanne Shelton",
        "gender": "female",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851",
        "transactions": []
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "imgIdx": 9,
        "name": "Pamela Nolan",
        "gender": "female",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166",
        "transactions": []
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "imgIdx": 10,
        "name": "Roy Cantu",
        "gender": "male",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295",
        "transactions": []
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "imgIdx": 11,
        "name": "Ollie Christian",
        "gender": "female",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550",
        "transactions": []
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "imgIdx": 12,
        "name": "Nguyen Walls",
        "gender": "male",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181",
        "transactions": []
    },
    {
        "_id": "5a56640298ab77236845b82b",
        "imgIdx": 13,
        "name": "Glenna Santana",
        "gender": "female",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376",
        "transactions": []
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "imgIdx": 14,
        "name": "Malone Clark",
        "gender": "male",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557",
        "transactions": []
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "imgIdx": 15,
        "name": "Floyd Rutledge",
        "gender": "male",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629",
        "transactions": []
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "imgIdx": 16,
        "name": "Grace James",
        "gender": "female",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529",
        "transactions": []
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "imgIdx": 17,
        "name": "Tanner Gates",
        "gender": "male",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291",
        "transactions": []
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "imgIdx": 18,
        "name": "Lilly Conner",
        "gender": "female",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812",
        "transactions": []
    }
];


function getContacts(filterBy = null) {
    return new Promise((resolve, reject) => {
        var contactsToReturn = contacts
        if (filterBy && filterBy.term) {
            contactsToReturn = filter(filterBy.term)
        }
        resolve(_sort(contactsToReturn))
    })
}

function getContactById(id) {
    return new Promise((resolve, reject) => {
        const contact = contacts.find(contact => contact._id === id)
        contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
    return new Promise((resolve, reject) => {
        const index = contacts.findIndex(contact => contact._id === id)
        if (index !== -1) {
            contacts.splice(index, 1)
        }

        resolve(contacts)
    })
}

function _updateContact(contact) {
    return new Promise((resolve, reject) => {
        const index = contacts.findIndex(c => contact._id === c._id)
        if (index !== -1) {
            contacts[index] = contact
        }
        resolve(contact)
    })
}

function _addContact(contact) {
    return new Promise((resolve, reject) => {
        contact._id = _makeId()
        contacts.push(contact)
        resolve(contact)
    })
}

function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

function filter(term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(term) ||
            contact.phone.toLocaleLowerCase().includes(term) ||
            contact.email.toLocaleLowerCase().includes(term)
    })
}

function _sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}