import { IRepository } from "../../shared/generic-repository";
import { Contact } from "../models/contact.model";

export interface ICustomerRepository extends IRepository<Contact, string> { }