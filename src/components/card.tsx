import Image from 'next/image'
import Link from 'next/link'

export default async function PokemonCard({url}: {url: string}) {
    const pokemon = await fetch(url)
        .then((res) => res.json()) as any;

    return (
        <Link href={`pokemon/12`} className="bg-white rounded-xl shadow-lg p-4 flex gap-4 items-center">
            <div className='min-w-[55px] w-[55px] h-[55px] min-h-[55px]'>
                <Image 
                    className='w-full aspect-square h-full object-contain' 
                    src={pokemon.sprites.other.dream_world.front_default} 
                    width={75} 
                    height={75} 
                    alt={pokemon.name} />
            </div>
            <div>
                <div className='font-medium text-lg capitalize'>{pokemon.name}</div>
                <div className='flex gap-2 p-0 m-0 list-none mt-1'>
                    {pokemon.types.map((type: any) => (
                        <li className='bg-gray-100 py-1 px-2 text-[10px] rounded-lg capitalize' key={type.id}>{type.type.name}</li>
                    ))}
                </div>
            </div>
        </Link>
    )
}