import { newGuid } from "ts-guid";

import { Entity } from "../../shared/entity.model";

export class Category extends Entity {
    
    constructor(private name: string) {
        super(newGuid());
    }

    get getName(): string {
        return this.name;
    }
}