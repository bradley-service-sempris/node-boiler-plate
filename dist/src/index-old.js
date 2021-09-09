"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("config");
const express_1 = require("express");
const routes_1 = require("../routes");
(async () => {
    try {
        const app = (0, express_1.default)();
        const port = config_1.default.get('PORT');
        app.use(routes_1.default);
        app.listen(port, () => {
            console.log('Server Has Begun', { port, timestamp: new Date() });
        });
    }
    catch (e) {
        console.log('App Failed To Launch', e);
    }
})();
