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
exports.deleteById = exports.create = exports.findById = exports.findAll = void 0;
const data_source_1 = require("../data-source");
const Property_1 = require("../models/Property");
const propertyRepository = data_source_1.AppDataSource.getRepository(Property_1.Property);
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return propertyRepository.find();
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return propertyRepository.findOneBy({ id });
});
exports.findById = findById;
const create = (propertyData) => __awaiter(void 0, void 0, void 0, function* () {
    const property = propertyRepository.create(propertyData);
    return propertyRepository.save(property);
});
exports.create = create;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    propertyRepository.delete({ id });
    const result = yield propertyRepository.delete({ id });
    if (result.affected === 0) {
        return null;
    }
    return true;
});
exports.deleteById = deleteById;
