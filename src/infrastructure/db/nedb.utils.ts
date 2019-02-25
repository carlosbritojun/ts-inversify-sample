import * as DataStore from "nedb";
import * as path from 'path';

import { injectable } from "inversify";
import { CONFIG } from "../../shared/constants";
import { Observable } from "rxjs";

@injectable()
export class NeDBUtils {

    buildDataStore() {
        return new DataStore({
            filename: CONFIG.dbPath,
            autoload: true
        });
    }

    insert<T>(data: T) {
        return new Observable<boolean>(subscriber => {
            const db = this.buildDataStore();
            db.insert(data, (err, doc) => {
                if (err) subscriber.error(err);
                subscriber.next(true);
            });
        });
    }

    update<T>(id: string, data: T) {
        return new Observable<boolean>(subscriber => {
            const db = this.buildDataStore();
            db.update(data, (err, doc) => {
                if (err) subscriber.error(err);
                subscriber.next(true);
            });
        });
    }

    remove(id: string) {
        return new Observable<boolean>(subscriber => {
            const db = this.buildDataStore();
            db.remove({_id: id}, (err, doc) => {
                if (err) subscriber.error(err);
                subscriber.next(true);
            });
        });
    }

    findOne(id: string) {
        return new Observable(subscriber => {
            const db = this.buildDataStore();
            db.findOne({_id: id}, (err, doc) => {
                if (err) subscriber.error(err);
                subscriber.next(doc);
            });
        });
    }

    findAll() {
        return new Observable(subscriber => {
            const db = this.buildDataStore();
            db.find({}, (err, doc) => {
                if (err) subscriber.error(err);
                subscriber.next(doc);
            });
        });
    }
}