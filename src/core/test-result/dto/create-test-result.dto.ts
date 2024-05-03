import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateTestResultDto {
  @IsEmpty()
  id: number;

  @IsNotEmpty()
  dateStart: Date;

  dateEnd: Date;

  @IsNotEmpty()
  passed: boolean;

  @IsNotEmpty()
  reference: string;

  observation: string;

  @IsEmpty()
  createAt: Date;
}
