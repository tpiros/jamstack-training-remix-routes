import { Form, useNavigation } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import { createCharacter } from 'utils/mock';

import type { ActionArgs } from '@remix-run/node';
import type { Character } from 'utils/interface-type';
import { CharacterDisplay } from '~/components/character';

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const newCharacter = Object.fromEntries(body) as unknown as Character;
  const character = await createCharacter(newCharacter);
  return redirect(`/characters/${character.id}`);
};

export default function NewCharacter() {
  const navigation = useNavigation();
  return navigation.formData ? (
    <CharacterDisplay
      character={
        Object.fromEntries(navigation.formData) as unknown as Character
      }
      canDelete={false}
    />
  ) : (
    <>
      <h2>Add a new character</h2>
      <Form method="post">
        <label>
          Name: <input name="name" type="text" />
        </label>
        <label htmlFor="description">
          Alliance: <input name="alliance" type="text" />
        </label>
        <button type="submit">Make it happen</button>
        {/* <button type="submit" disabled={navigation.state === 'submitting'}>
          {navigation.state === 'submitting'
            ? 'Busy making it happen ...'
            : 'Make it happen'}
        </button> */}
      </Form>
    </>
  );
}
