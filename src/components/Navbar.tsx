import { IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between'>
      <img src="/Logo.png" alt="" />
      <ul className='hidden md:flex justify-between items-center gap-4'>
        <li>
            <Link to='#'>About Us</Link>
        </li>
        <li>
            <Link to='#'>Services</Link>
        </li>
        <li>
            <Link to='#'>Use Cases</Link>
        </li>
        <li>
            <Link to='#'>Pricing</Link>
        </li>
        <li>
            <Link to='#'>Blog</Link>
        </li>
      <button className='border px-4 py-2 rounded-xl border-appDark'>Request quote</button>
      </ul>
      <IoMdMenu size={25} className='sm:hidden' />
    </div>
  )
}

export default Navbar
