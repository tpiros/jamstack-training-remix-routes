import { json } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { findCharacters } from 'utils/mock';

export async function loader() {
  return json(await findCharacters());
}

export default function Characters() {
  const characters = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Characters</h1>
      <p>
        <Link to="/characters/new">Add new</Link>
      </p>
      <ul>
        {characters.map((character) => (
          <Link key={character.id} to={character.id}>
            <li>{character.name}</li>
          </Link>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
