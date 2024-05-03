import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { TestResultService } from './test-result.service';

@Controller('test-result')
export class TestResultController {
  constructor(private readonly testResultService: TestResultService) {}

  @Post()
  create(@Body() createTestResultDto: CreateTestResultDto) {
    return this.testResultService.create(createTestResultDto);
  }

  @Get('reference/:reference')
  findByReference(@Param('reference') reference: string) {
    return this.testResultService.findByReference(reference);
  }

  @Get(':page/:size')
  findAll(@Param('page') page, @Param('size') size) {
    return this.testResultService.findAll(+page, +size);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testResultService.findOne(+id);
  }
}
