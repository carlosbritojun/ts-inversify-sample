import { IContactRepository } from "../../domain/repositories/contact.repository";
import { Contact } from "../../domain/models/contact.model";
import { Observable } from "rxjs";

export class ContactRepository implements IContactRepository {
    
    

    create(entity: Contact): Observable<boolean> {
        throw new Error("Method not implemented.");
    }    
    
    update(id: string, entity: Contact): Observable<boolean> {
        throw new Error("Method not implemented.");
    }
    
    delete(id: string): Observable<boolean> {
        throw new Error("Method not implemented.");
    }
    
    get(): Observable<Contact[]>;
    
    get(id: string): Observable<Contact>;
    
    get(id?: any): any {
        throw new Error("Method not implemented.");
    }
}