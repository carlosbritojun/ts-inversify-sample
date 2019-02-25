import { Observable } from "rxjs";

export interface IRepository<T, Tid> {
    create(entity: T): Observable<boolean>;
    update(id: Tid, entity: T): Observable<boolean>;
    delete(id: Tid): Observable<boolean>;

    get(): Observable<T[]>;
    get(id: Tid): Observable<T>;
}