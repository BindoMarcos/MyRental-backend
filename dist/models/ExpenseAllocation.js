"use strict";
// src/entities/ExpenseAllocation.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseAllocation = void 0;
const typeorm_1 = require("typeorm");
const Expense_1 = require("./Expense");
const Property_1 = require("./Property");
let ExpenseAllocation = class ExpenseAllocation {
};
exports.ExpenseAllocation = ExpenseAllocation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ExpenseAllocation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExpenseAllocation.prototype, "expenseId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExpenseAllocation.prototype, "propertyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], ExpenseAllocation.prototype, "allocatedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ExpenseAllocation.prototype, "paymentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], ExpenseAllocation.prototype, "paidDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExpenseAllocation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Expense_1.Expense, expense => expense.allocations),
    __metadata("design:type", Expense_1.Expense)
], ExpenseAllocation.prototype, "expense", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Property_1.Property),
    __metadata("design:type", Property_1.Property)
], ExpenseAllocation.prototype, "property", void 0);
exports.ExpenseAllocation = ExpenseAllocation = __decorate([
    (0, typeorm_1.Entity)('expense_allocations')
], ExpenseAllocation);
