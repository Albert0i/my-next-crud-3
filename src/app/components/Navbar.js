import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex justify-end'>
            <Link href='/' className='hover:text-slate-500'>Home</Link>
            <Link href='/add' className='px-4 hover:text-slate-500'>Add</Link>
    </nav>
  )
}
