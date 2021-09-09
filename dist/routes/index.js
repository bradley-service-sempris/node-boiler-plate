"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const system_1 = require("./v1/system");
const router = (0, express_1.default)();
router.get('/heartbeat', system_1.heartbeat);
exports.default = router;
