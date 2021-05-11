import { Task3validatorPipe } from './task3validator.pipe';

describe('Task3validatorPipe', () => {

  const pipe = new Task3validatorPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reject strings', () => {
    expect(pipe.transform('test')).toBe('the inserted text is not an integer');
  });

  it('should have 3 or more characters and contain a 9', () => {
    expect(pipe.transform('11')).toBe('the inserted text is too short and does not contain a 9');
  });

  it('should be valid', () => {
    expect(pipe.transform('109')).toBe('validated');
  });
});
