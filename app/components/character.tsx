import { Form, Link } from '@remix-run/react';
import type { Character } from 'utils/interface-type';

export function CharacterDisplay({
  character,
  canDelete = true,
}: {
  character: Character;
  canDelete?: boolean;
}) {
  return (
    <div>
      <h2>{character.name}</h2>
      <h3>{character.alliance}</h3>
      <Form method="post">
        <button
          disabled={!canDelete}
          name="intent"
          type="submit"
          value="delete"
        >
          Delete
        </button>
      </Form>
      <p>
        <Link to="/characters">Back</Link>
      </p>
    </div>
  );
}
