"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategroyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_categroy_dto_1 = require("./create-categroy.dto");
class UpdateCategroyDto extends (0, swagger_1.PartialType)(create_categroy_dto_1.CreateCategroyDto) {
}
exports.UpdateCategroyDto = UpdateCategroyDto;
//# sourceMappingURL=update-categroy.dto.js.map