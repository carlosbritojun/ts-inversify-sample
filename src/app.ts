import { InversifyExpressServer } from "inversify-express-utils";
import * as bodyParser from 'body-parser';

import { CONFIG } from "./shared/constants";
import { ioCContainer } from "./crosscutting/ioc/contactfy.config";

const server = new InversifyExpressServer(ioCContainer);

server.setConfig((app) => {
    app.use(bodyParser.urlencode({
        extended: true
    }));
    app.use(bodyParser.json());
});

const serverInstance = server.build();
serverInstance.listen(CONFIG.port);

console.log(`Contactfy server started on port: ${CONFIG.port}`);
