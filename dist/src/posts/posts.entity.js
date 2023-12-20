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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsEntity = void 0;
const typeorm_1 = require("typeorm");
const categroy_entity_1 = require("../categroy/entities/categroy.entity");
const class_transformer_1 = require("class-transformer");
const tag_entity_1 = require("../tag/entities/tag.entity");
const user_entity_1 = require("../user/entities/user.entity");
let PostsEntity = class PostsEntity {
};
exports.PostsEntity = PostsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PostsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], PostsEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'mediumtext', default: null }),
    __metadata("design:type", String)
], PostsEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'mediumtext', default: null, name: 'content_html' }),
    __metadata("design:type", String)
], PostsEntity.prototype, "contentHtml", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: null }),
    __metadata("design:type", String)
], PostsEntity.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null, name: 'cover_url' }),
    __metadata("design:type", String)
], PostsEntity.prototype, "coverUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PostsEntity.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'like_count' }),
    __metadata("design:type", Number)
], PostsEntity.prototype, "likeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0, name: 'is_recommend' }),
    __metadata("design:type", Number)
], PostsEntity.prototype, "isRecommend", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-enum', { enum: ['draft', 'publish'] }),
    __metadata("design:type", String)
], PostsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.User, (user) => user.posts),
    __metadata("design:type", user_entity_1.User)
], PostsEntity.prototype, "author", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToOne)(() => categroy_entity_1.CategroyEntity, (category) => category.posts),
    (0, typeorm_1.JoinColumn)({
        name: 'category_id',
    }),
    __metadata("design:type", categroy_entity_1.CategroyEntity)
], PostsEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tag_entity_1.TagEntity, (tag) => tag.posts),
    (0, typeorm_1.JoinTable)({
        name: 'post_tag',
        joinColumns: [{ name: 'post_id' }],
        inverseJoinColumns: [{ name: 'tag_id' }],
    }),
    __metadata("design:type", Array)
], PostsEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', name: 'publish_time', default: null }),
    __metadata("design:type", Date)
], PostsEntity.prototype, "publishTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PostsEntity.prototype, "create_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PostsEntity.prototype, "update_time", void 0);
exports.PostsEntity = PostsEntity = __decorate([
    (0, typeorm_1.Entity)('post')
], PostsEntity);
//# sourceMappingURL=posts.entity.js.map