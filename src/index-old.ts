import config from 'config';
import express from 'express';
import router from '../routes';

(async () => {
    try {
        const app = express();
        const port = config.get('PORT');

        app.use(router);

        app.listen(port, () => {
            console.log('Server Has Begun', { port, timestamp: new Date() });
        });
    } catch (e) {
        console.log('App Failed To Launch', e);
    }
})();