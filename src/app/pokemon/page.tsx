import PokemonCard from "@/components/card";
import NavButton from "@/components/navigation/button";

export const runtime = 'edge';

export default async function PokemonPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const page = searchParams.page ?? 1;
    const limit = 10;

    let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${limit * (+page - 1)}&limit=${limit}`)
        .then((res) => res.json())

    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pokemons.results.map((pokemon: any) => (
                    <PokemonCard url={pokemon.url} key={pokemon.name} />
                ))}
            </div>

            <div className="flex gap-4 items-center mt-8 mx-auto w-fit">
                <NavButton type="prev" last={pokemons.previous === null} page={+page} />
                <div className="w-6 h-6 rounded-full bg-green-400 flex justify-center items-center text-[12px] text-white font-semibold">{page}</div>
                <NavButton type="next" last={pokemons.next === null} page={+page} />
            </div>
        </div>
    );
}