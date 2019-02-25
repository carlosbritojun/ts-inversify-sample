import { controller, httpGet } from 'inversify-express-utils';
import { Contact } from '../../domain/models/contact.model';

@controller('/api/contact')
export class ContactController {

    @httpGet('/')
    public get(): Contact[] {
        return null;
    }
}