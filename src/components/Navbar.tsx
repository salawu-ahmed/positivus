import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between'>
      <img src="/src/assets/Logo.png" alt="" />
      <ul className='flex justify-between items-center gap-4'>
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
      <button>Request quote</button>
      </ul>
    </div>
  )
}

export default Navbar
