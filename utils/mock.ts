import prisma from './db.server';
import type { Character } from './interface-type';

export const findCharacters = async () => {
  const characters = await prisma.character.findMany();
  return characters;
};

export const findCharacter = async (id: string | undefined) => {
  const character = await prisma.character.findUnique({
    where: {
      id,
    },
  });
  return character;
};

export const createCharacter = async (data: Character) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const character = await prisma.character.create({ data });
  return character;
};

export const deleteCharacter = async (id: string | undefined) => {
  await prisma.character.delete({ where: { id } });
};
