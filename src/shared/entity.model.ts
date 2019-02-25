export abstract class Entity {

   constructor(protected id: string) {}

   public getId(): string {
       return this.id;
   }

   toJSON() {
       return JSON.stringify(this);
   }
}