import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-categoriy.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
