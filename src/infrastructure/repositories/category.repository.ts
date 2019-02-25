import "reflect-metadata";
import { Observable } from "rxjs";

import { ICategoryRepository } from "../../domain/repositories/category.repository";
import { Category } from "../../domain/models/category.model";

export class CategoryRepository implements ICategoryRepository {

    constructor() {
        
    }

    create(entity: Category): Observable<boolean> {
        return null;
    }    
    
    update(id: string, entity: Category): Observable<boolean> {
        throw new Error("Method not implemented.");
    }
    
    delete(id: string): Observable<boolean> {
        throw new Error("Method not implemented.");
    }
    
    get(): Observable<Category[]>;
    
    get(id: string): Observable<Category>;
    
    get(id?: any): any {
        throw new Error("Method not implemented.");
    }
}