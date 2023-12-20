import { CategroyService } from './categroy.service';
import { CreateCategroyDto } from './dto/create-categroy.dto';
import { UpdateCategroyDto } from './dto/update-categroy.dto';
export declare class CategroyController {
    private readonly categroyService;
    constructor(categroyService: CategroyService);
    create(createCategroyDto: CreateCategroyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCategroyDto: UpdateCategroyDto): string;
    remove(id: string): string;
}
