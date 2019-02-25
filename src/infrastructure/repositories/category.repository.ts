import "reflect-metadata";
import { inject } from "inversify";

import { Observable } from "rxjs";

import { ICategoryRepository } from "../../domain/repositories/category.repository";
import { Category } from "../../domain/models/category.model";
import { NeDBUtils } from "../db/nedb.utils";

export class CategoryRepository implements ICategoryRepository {

    constructor(@inject("NeDBUtils") private readonly db: NeDBUtils) { }

    create(entity: Category): Observable<boolean> {
       return this.db.insert(entity);
    }    
    
    update(id: string, entity: Category): Observable<boolean> {
        return this.db.update(id, entity);
    }
    
    delete(id: string): Observable<boolean> {
       return this.db.remove(id);
    }
    
    get(): Observable<Category[]>;
    
    get(id: string): Observable<Category>;
    
    get(id?: any): any {
        if (id) return this.db.findOne(id);
        else  return this.db.findAll();
    }
}