import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  const firstName = 'Ada';
  const lastName = 'Lovelace';
  const role = 'Computer Scientist';
  let character;

  beforeEach(() => {
    character = new Character(firstName, lastName, role);
  });

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual({
      firstName,
      lastName,
      role,
      strength: expect.any(Number),
      wisdom: expect.any(Number),
      dexterity: expect.any(Number),
      intelligence: expect.any(Number),
      constitution: expect.any(Number),
      charisma: expect.any(Number),
      level: 1,
      lastModified: expect.any(Date),
      createdAt: expect.any(Date),
      id: expect.stringContaining('person-'),
    });
  });

  it('should allow you to increase the level', () => {
    const initialLevel = character.level;

    character.levelUp();

    expect(character.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const initialLastModified = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(initialLastModified);
  });
});
