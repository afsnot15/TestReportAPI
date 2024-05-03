import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { TestResult } from './entities/test-result.entity';

@Injectable()
export class TestResultService {
  @InjectRepository(TestResult)
  private repository: Repository<TestResult>;

  create(createTestResultDto: CreateTestResultDto) {
    createTestResultDto.createAt = new Date();

    const created = this.repository.create(createTestResultDto);

    return this.repository.save(created);
  }

  async findAll(page: number, size: number): Promise<TestResult[]> {
    if (page <= 0) {
      throw new HttpException(
        'The page parameter must be greater than 0',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    if (size === 0) {
      return [];
    }

    page--;

    return await this.repository.find({
      skip: size * page || 0,
      take: size || 10,
      order: { id: 'ASC' },
    });
  }

  async findOne(pId: number) {
    return await this.repository.findOne({ where: { id: pId } });
  }

  async findByReference(pReference: string) {
    return await this.repository.find({
      where: { reference: pReference.toUpperCase() },
    });
  }
}
