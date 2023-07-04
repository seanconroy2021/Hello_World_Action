import { greet } from '../src/index';

describe('testing index file', () => {
  test('greet function should output the correct message', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    greet('John');
    expect(consoleLogSpy).toHaveBeenCalledWith(`'Hello John!'`);
    consoleLogSpy.mockRestore();
  });
});