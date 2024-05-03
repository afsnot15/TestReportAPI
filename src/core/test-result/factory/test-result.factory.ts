import { fakerPT_BR as faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { CreateTestResultDto } from '../dto/create-test-result.dto';
import { TestResult } from '../entities/test-result.entity';

define(TestResult, () => {
  const testResult = new CreateTestResultDto();

  testResult.dateStart = faker.date.recent();
  testResult.dateEnd = faker.date.recent();
  testResult.passed = faker.datatype.boolean();
  testResult.reference = 'QA-1234';
  testResult.observation = faker.string.sample(500);
  testResult.createAt = new Date();

  return new TestResult(testResult);
});
