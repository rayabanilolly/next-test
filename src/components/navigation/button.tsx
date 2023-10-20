import Link from 'next/link';

export default function NavButton({ page, type, last }: { page: number, type: string, last: boolean }) {
    console.log('type:', last);

    return (
        <>
            {last ? (
                <NavButtonDisabled type={type} />
            ) : (
                <Link
                    className='text-[10px] text-white font-semibold py-1 px-2 bg-gray-400 rounded-lg' 
                    href={`/pokemon?page=${type === 'next' ? ++page : --page}`}>
                    { type === 'next' ? 'Next' : 'Prev' }
                </Link>
            )}
        </>
    )
}

export function NavButtonDisabled({type}: {type: string}) {
    return (
        <Link
            className='text-[10px] text-white font-semibold py-1 px-2 bg-gray-200 rounded-lg'
            href='#'>
            {type === 'next' ? 'Next' : 'Prev'}
        </Link>
    )
}