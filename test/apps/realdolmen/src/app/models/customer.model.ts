export class Customer {
    id : string;
    photo : string;
    creationDate : number;
    modificationDate : number;
    birthday : number;
    address : string;
    phone : string; 
    gender : string;
    description : string;
    interests : { name: string; interested: boolean; }[];
    availability :string;
    constructor(public email : string, public name : string, public lastname : string){}
}