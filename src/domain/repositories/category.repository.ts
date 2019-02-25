import { Category } from "../models/category.model";
import { IRepository } from "../../shared/generic-repository";

export interface ICategoryRepository extends IRepository<Category, string> {
}