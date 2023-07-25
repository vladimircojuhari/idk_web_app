export class Driver{
    _id: string;
    first_name: string;
    last_name: string;
    phone: string;
    age: number;
    pin: number;
    password: string;

    get full_name() {
        return this.first_name + ' ' + this.last_name;
    }
    constructor() {

    }
}
