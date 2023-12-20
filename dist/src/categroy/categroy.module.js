"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategroyModule = void 0;
const common_1 = require("@nestjs/common");
const categroy_service_1 = require("./categroy.service");
const categroy_controller_1 = require("./categroy.controller");
const typeorm_1 = require("@nestjs/typeorm");
const categroy_entity_1 = require("./entities/categroy.entity");
let CategroyModule = class CategroyModule {
};
exports.CategroyModule = CategroyModule;
exports.CategroyModule = CategroyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categroy_entity_1.CategroyEntity])],
        controllers: [categroy_controller_1.CategroyController],
        providers: [categroy_service_1.CategroyService],
    })
], CategroyModule);
//# sourceMappingURL=categroy.module.js.map