"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategroyService = void 0;
const common_1 = require("@nestjs/common");
let CategroyService = class CategroyService {
    findById(category) {
        throw new Error('Method not implemented.');
    }
    create(createCategroyDto) {
        return 'This action adds a new categroy';
    }
    findAll() {
        return `This action returns all categroy`;
    }
    findOne(id) {
        return `This action returns a #${id} categroy`;
    }
    update(id, updateCategroyDto) {
        return `This action updates a #${id} categroy`;
    }
    remove(id) {
        return `This action removes a #${id} categroy`;
    }
};
exports.CategroyService = CategroyService;
exports.CategroyService = CategroyService = __decorate([
    (0, common_1.Injectable)()
], CategroyService);
//# sourceMappingURL=categroy.service.js.map