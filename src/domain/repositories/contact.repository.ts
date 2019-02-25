import { IRepository } from "../../shared/generic-repository";
import { Contact } from "../models/contact.model";

export interface IContactRepository extends IRepository<Contact, string> { }