import Link from 'next/link';
import { Bars3Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className='navbar h-[10vh] z-10 px-16 fixed bg-[#eee] dark:bg-[#111]'>
			{/* Desktop Navbar */}
			<div className='navbar-start hidden lg:flex'>
				<Link
					href='/#hero'
					className='hover:opacity-75'>
					<Image
						className='rounded-full'
						src='/F5 Logo-color black.png'
						alt=''
						height={64}
						width={64}
					/>
				</Link>
			</div>

			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal z-10 bg-inherit'>
					<li>
						<Link href=''>Volunteer</Link>
					</li>
					<li>
						<Link href=''>Invite</Link>
					</li>
					<li>
						<Link href=''>Support</Link>
					</li>
				</ul>
			</div>

			<div className='navbar-end hidden lg:flex'>
				<Link href='/#contact'>Contact Us</Link>
			</div>

			{/* Mobile Navbar */}
			<div className='lg:hidden navbar-start'>
				<div className='dropdown dropdown-bottom'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'>
						<Bars3Icon
							height={28}
							width={28}
						/>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#eee] dark:bg-[#111] rounded-box w-52'>
						<li>
							<Link href=''>Volunteer</Link>
						</li>
						<li>
							<Link href=''>Invite</Link>
						</li>
						<li>
							<Link href=''>Support</Link>
						</li>
						<li>
							<Link href='/#contact'>Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className='lg:hidden navbar-center'>
				<Link
					href='/#hero'
					className='hover:opacity-50 text-lg'>
					F5 MOMENTS
				</Link>
			</div>

			<div className='lg:hidden navbar-end'>
				<Link
					href='/#hero'
					className='hover:opacity-75'>
					<Image
						className='rounded-full'
						src='/F5 Logo-color black.png'
						alt=''
						height={64}
						width={64}
					/>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
