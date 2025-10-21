"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./models/User");
const Property_1 = require("./models/Property");
const Payment_1 = require("./models/Payment");
const Tenant_1 = require("./models/Tenant");
const Contract_1 = require("./models/Contract");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Property_1.Property, Payment_1.Payment, Tenant_1.Tenant, Contract_1.Contract],
    subscribers: [],
    migrations: [],
});
