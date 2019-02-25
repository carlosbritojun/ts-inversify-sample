import "reflect-metadata";
import { Container } from "inversify";

import { NeDBUtils  } from "../../infrastructure/db/nedb.utils"; 
import { IContactRepository } from "../../domain/repositories/contact.repository";
import { ContactRepository } from "../../infrastructure/repositories/contact.repository";
import { ICategoryRepository } from "../../domain/repositories/category.repository";
import { CategoryRepository } from "../../infrastructure/repositories/category.repository";

const ioCContainer = new Container();
ioCContainer.bind<NeDBUtils>("NeDBUtils").to(NeDBUtils);
ioCContainer.bind<IContactRepository>("ContactRepository").to(ContactRepository);
ioCContainer.bind<ICategoryRepository>("CategoryRepository").to(CategoryRepository);

export { ioCContainer };