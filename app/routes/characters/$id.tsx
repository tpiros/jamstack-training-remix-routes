import { json, redirect } from '@remix-run/node';
import type { LoaderArgs, ActionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { deleteCharacter, findCharacter } from 'utils/mock';
import { CharacterDisplay } from '~/components/character';
import type { Character } from 'utils/interface-type';

export async function loader({ params }: LoaderArgs) {
  return json(await findCharacter(params.id));
}

export async function action({ params }: ActionArgs) {
  await deleteCharacter(params.id);
  return redirect('/characters');
}

export default function CharacterRoute() {
  const character = useLoaderData<typeof loader>() as Character;
  return <CharacterDisplay character={character} />;
}
