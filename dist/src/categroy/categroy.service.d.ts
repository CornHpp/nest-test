import { CreateCategroyDto } from './dto/create-categroy.dto';
import { UpdateCategroyDto } from './dto/update-categroy.dto';
export declare class CategroyService {
    findById(category: any): void;
    create(createCategroyDto: CreateCategroyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCategroyDto: UpdateCategroyDto): string;
    remove(id: number): string;
}
