import { newGuid } from "ts-guid";

import { Entity } from "../../shared/entity.model";
import { Category } from "./category.model";
import { Email } from "../vos/email.vo";
import { Phone } from "../vos/phone.vo";

export class Contact extends Entity {

    private phones: Phone[];
    
    constructor(private name: string, private email: Email, private category: Category) {
        super(newGuid());
        this.phones = [];
     }

     get getName() {
         return this.name;
     }

     get getEmail() {
         return this.email;
     }

     get getCategory() {
         return this.category;
     }

     get getPhones() {
         return this.phones;
     }

     addPhone(phone: Phone) {
         this.phones.push(phone);
     }

     removePhone(phone: Phone) {
         //
     } 
}