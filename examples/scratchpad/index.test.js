import { test, expect, vi } from 'vitest';

const random = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);

test('a super simple test', () => {
  const result = Math.random();
  expect(result).toBe(0.5);
});
