import * as express from 'express';
import { heartbeat } from './v1/system';

const router = express();

router.get('/heartbeat', heartbeat);

export default router;
