/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Carlos',
    description: 'Nome do usuário a ser criado',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'carlos.kohaute@gmail.com',
    description: 'Email do usuário a ser criado',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2Fpermalink.php%3Fid%3D196235647633063%26story_fbid%3D430074620915830&psig=AOvVaw3XrkJj1hSGydALugBmV-qg&ust=1670870162374000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDk0sWa8vsCFQAAAAAdAAAAABAE',
    description: 'URL da foto do usuário',
  })
  imageURL: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'weak password',
  })
  @ApiProperty({
    example: '@Abc1234',
    description:
      'Senha do usuário a ser criado, mínimo de uma letra minúscula, uma maiuscula, um simbolo e um número.',
  })
  password: string;
}
