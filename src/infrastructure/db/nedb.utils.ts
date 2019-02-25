import * as DataStore from "nedb";
import * as path from 'path';

import { injectable } from "inversify";
import { CONFIG } from "../../shared/constants";

@injectable()
export class NeDBUtils {

    private db: DataStore;

    constructor() {
        this.db = new DataStore({
            filename: path.resolve(CONFIG.dbPath),
            autoload: true });
    }

    get context() {
        return this.db;
    }
}