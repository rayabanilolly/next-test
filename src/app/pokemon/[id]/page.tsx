import Image from 'next/image';

export default async function PokemonDetailPage({ params }: { params: { id: string } }) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`, { cache: 'no-store' })
        .then((res) => res.json());

    return (
        <div>
            <div className="flex justify-center items-center">
                <Image
                    className="h-40 w-40 object-contain"
                    width={64}
                    height={64}
                    alt={pokemon.name}
                    src={pokemon.sprites.other.dream_world.front_default}
                />
            </div>
            <div className="capitalize">{pokemon.name}</div>
        </div>
    )
}