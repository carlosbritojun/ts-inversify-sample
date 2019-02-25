import "reflect-metadata";
import { inject } from "inversify";
import { Observable } from "rxjs";

import { IContactRepository } from "../../domain/repositories/contact.repository";
import { Contact } from "../../domain/models/contact.model";
import { NeDBUtils } from "../db/nedb.utils";

export class ContactRepository implements IContactRepository {
    
    constructor(@inject("NeDBUtils") private readonly db: NeDBUtils) { }
    
    create(entity: Contact): Observable<boolean> {
        return this.db.insert(entity);
    }    
    
    update(id: string, entity: Contact): Observable<boolean> {
        return this.db.update(id, entity);
    }
    
    delete(id: string): Observable<boolean> {
        return this.db.remove(id);
    }
    
    get(): Observable<Contact[]>;
    
    get(id: string): Observable<Contact>;
    
    get(id?: any): any {
        if (id) return this.db.findOne(id);
        else return this.db.findAll();
    }
}