class Contact 
{
    constructor(...parameters) 
    {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }
    get firstName() 
    {
        return this._firstName;
    }
    set firstName(firstName) 
    {
        const FIRST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (FIRST_NAME_REGEX.test(firstName)) {
            this._firstName = firstName;
        }
        else throw "First Name : " + firstName + " is Invalid!";

    }

    get lastName() 
    {
        return this._lastName;
    }
    set lastName(lastName) 
    {
        const LAST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (LAST_NAME_REGEX.test(lastName)) 
        {
            this._lastName = lastName;
        }
        else throw "Last Name : " + lastName + " is Invalid!";

    }

    get address() 
    {
        return this._address;
    }
    set address(address)
    {
        const ADRESS_REGEX = RegExp("[A-Za-z0-9]{4,}");
        if (ADRESS_REGEX.test(address)) 
        {
            this._address = address;
        }
        else throw "Address : " + address + " is Invalid!";
    }

    get city()
    {
        return this._city;
    }
    set city(city) 
    {
        const CITY_REGEX = RegExp("[A-Za-z]{4,}");
        if (CITY_REGEX.test(city)) 
        {
            this._city = city;
        }
        else throw "City : " + city + " is Invalid!";
    }

    get state() 
    {
        return this._state;
    }
    set state(state) 
    {
        const STATE_REGEX = RegExp("[A-Za-z]{4,}");
        if (STATE_REGEX.test(state)) 
        {
            this._state = state;
        }
        else throw "State : " + state + " is Invalid!";
    }

    get zip() 
    {
        return this._zip;
    }
    set zip(zip) 
    {
        const ZIP_REGEX = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (ZIP_REGEX.test(zip)) 
        {
            this._zip = zip;
        }
        else throw "Zip : " + zip + " is Invalid!";
    }

    get phoneNumber() 
    {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) 
    {
        const PHONE_NUMBER_REGEX = RegExp("^[1-9]{0,2}[0-9]{9}$");
        if (PHONE_NUMBER_REGEX.test(phoneNumber)) 
        {
            this._phoneNumber = phoneNumber;
        }
        else throw "Phone Number : " + phoneNumber + " is Invalid!";
    }

    get email() 
    {
        return this._email;
    }
    set email(email) 
    {
        const EMAIL_REGEX = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
        if (EMAIL_REGEX.test(email)) 
        {
            this._email = email;
        }
        else throw "Email : " + email + " is Invalid!";
    }

    toString() 
    {
        return "First Name: " + this.firstName + " , Last Name: " + this.lastName + " , Address: "
            + this.address + " , City: " + this.city + " , State: " + this.state + " , Zip: " + this.zip +
            "  ,Phone Number: " + this.phoneNumber + " , Email: " + this.email + "\n";
    }
}
let addressBookArray = new Array();
let contact1 = new Contact("Srinadh", "Tadiparthi", "Tenali", "Guntur", "Andhra Pradesh", 522201, 9290090032, "srinadh@gmail.com");
let contact2=new Contact("Chandra", "Tadiparthi", "Tenali", "Guntur", "Andhra Pradesh", 522201, 8463934331, "chandra@gmail.com");
let contact3=new Contact("Pushpa", "Tadiparthi", "Tenali", "Guntur", "Andhra Pradesh", 522201, 7207121134, "pushpa@gmail.com");

checkForDuplicate(contact1)
checkForDuplicate(contact2)
checkForDuplicate(contact3)
checkForDuplicate(contact1)


function checkForDuplicate(contact){
    let duplicate = addressBookArray.find(currentContact => currentContact._firstName == contact._firstName);
    if(duplicate == null){
        addressBookArray.push(contact);
    }
    else console.log("Duplicate contact found discarding the contact\n"+contact);
}
console.log("Contacts in the array")
addressBookArray.forEach(contact => console.log(contact.toString())); 
function checkContact(firstName) 
{
    return addressBookArray.some(contact => contact.firstName == firstName );
}

function editContactDetails(firstName, property, newValue) 
{
    if (checkContact(firstName)) {
        switch (property) {
            case "lastName":
                addressBookArray.find((contact) => contact.firstName == firstName).lastName = newValue;
                break;
            case "address":
                addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid property");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
}

editContactDetails("Srinadh", "lastName", "Mirchi");
console.log("After Editing")
addressBookArray.forEach(contact => console.log(contact.toString())); 

function deleteContact(firstName)
{
    let index = addressBookArray.findIndex(contact => contact.firstName == firstName)
    if (index != -1) 
    {
        addressBookArray.splice(index, 1)
    } 
    else 
    {
        console.log(`${firstName} not found`)
    }
}

deleteContact("Srinadh");
console.log("After deleting contact from address book : ")
addressBookArray.forEach(contact => console.log(contact.toString())); 
function numberOfContacts(totalCount) 
{
    return totalCount + 1;
}
let totalNumberOfContacts = addressBookArray.reduce(numberOfContacts,0);
console.log("Total Number of Contacts in the Address Book Array : " + totalNumberOfContacts); 
