import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

vi.mock('./send-to-server', () => {
  return { sendToServer: vi.fn() };
});

import { sendToServer } from './send-to-server';

describe('logger', () => {
  describe('development', () => {
    beforeEach(() => vi.stubEnv('MODE', 'development'));

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('logs to the console in development mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello World');

      expect(logSpy).toHaveBeenCalledWith('Hello World');
    });
  });

  describe('production', () => {
    beforeEach(() => vi.stubEnv('MODE', 'production'));

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should not call console.log in production', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello World');

      expect(logSpy).not.toHaveBeenCalled();
      expect(sendToServer).toHaveBeenCalled();
    });
  });
});
