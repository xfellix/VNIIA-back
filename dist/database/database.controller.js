"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseController = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("./database.service");
let DatabaseController = class DatabaseController {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async getData() {
        return this.databaseService.getDataFromDatabase();
    }
    async deleteDataById(id) {
        await this.databaseService.deleteDataById(id);
        return { message: 'Data deleted successfully' };
    }
    async updateDataById(id, updatedData) {
        await this.databaseService.updateDataById(id, updatedData);
        return { message: 'Data updated successfully' };
    }
    async addData(newData) {
        await this.databaseService.addData(newData);
        return { message: 'Data added successfully' };
    }
};
exports.DatabaseController = DatabaseController;
__decorate([
    (0, common_1.Get)('getDataFromDatabase'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "getData", null);
__decorate([
    (0, common_1.Delete)('deleteDataById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "deleteDataById", null);
__decorate([
    (0, common_1.Put)('updateDataById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "updateDataById", null);
__decorate([
    (0, common_1.Post)('addData'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DatabaseController.prototype, "addData", null);
exports.DatabaseController = DatabaseController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseController);
//# sourceMappingURL=database.controller.js.map