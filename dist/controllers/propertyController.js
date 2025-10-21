"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.createProperty = exports.getPropertyByID = exports.getProperties = void 0;
const propertyService_1 = require("../services/propertyService");
const getProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const properties = yield (0, propertyService_1.findAll)();
        res.status(200).json(properties);
    }
    catch (error) {
        console.error('Error fetching properties:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getProperties = getProperties;
const getPropertyByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const property = yield (0, propertyService_1.findById)(id);
        if (!property) {
            res.status(404).json({ message: 'Property not found' });
            return;
        }
        res.status(200).json(property);
    }
    catch (error) {
        console.error('Error fetching property by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getPropertyByID = getPropertyByID;
const createProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProperty = yield (0, propertyService_1.create)(req.body);
        res.status(201).json(newProperty);
    }
    catch (error) {
        console.error('Error creating property:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createProperty = createProperty;
const deleteProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const property = yield (0, propertyService_1.deleteById)(id);
        if (!property) {
            res.status(404).json({ message: 'Property not found' });
            return;
        }
        res.status(200).json(property);
    }
    catch (error) {
        console.error('Error fetching property by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.deleteProperty = deleteProperty;
