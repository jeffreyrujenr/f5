'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const testimonials = [
	{
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores non esse sequi libero impedit, aperiam voluptatum ullam animi consequatur praesentium',
		image: 'http://via.placeholder.com/360x360',
		name: 'Name 1',
		institution: 'Institution 1',
		city: 'City 1',
	},
	{
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores non esse sequi libero impedit',
		image: 'http://via.placeholder.com/360x360',
		name: 'Name 2',
		institution: 'Institution 2',
		city: 'City 2',
	},
	{
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores non esse sequi libero impedit, aperiam voluptatum',
		image: 'http://via.placeholder.com/360x360',
		name: 'Name 3',
		institution: 'Institution 3',
		city: 'City 3',
	},
];

export default function Home() {
	return (
		<main className='flex flex-col h-full items-center justify-center text-center'>
			<section
				className='hero min-h-screen'
				id='hero'>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<h1 className='text-4xl font-bold'>F5 MOMENTS</h1>
						<p className='py-6'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
							eligendi neque aspernatur ad aut, repellat mollitia quisquam?
							Explicabo, tenetur quo.
						</p>
						<div className='flex justify-evenly items-center px-10'>
							<Link
								href=''
								className='btn btn-primary'>
								Invite Us
							</Link>
							<Link
								href=''
								className='btn btn-outline'>
								Volunteer
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className='flex min-h-screen justify-center items-center w-2/3'>
				<p className='w-1/2 text-center'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
					nulla. Blanditiis enim veniam quae porro amet aperiam. Fugit, ratione
					accusantium fuga sit aliquid minus repudiandae inventore ab,
					voluptatem rem ullam.
				</p>
				<div className='flex flex-col w-1/2 text-center'>
					<h3 className='text-3xl'>10000+</h3>
					<p className='opacity-75 mb-4'>Students reached</p>
					<h3 className='text-3xl'>100+</h3>
					<p className='opacity-75 mb-4'>Institutions</p>
					<h3 className='text-3xl'>10+</h3>
					<p className='opacity-75 mb-4'>Cities</p>
				</div>
			</section>

			<section className='flex min-h-screen flex-col lg:flex-row w-full justify-evenly items-center'>
				{testimonials.map((testimony) => (
					<div
						key={testimony.name}
						className='flex flex-col justify-center items-center text-center my-8 lg:w-1/3'>
						<h3 className='text-2xl w-2/3 opacity-75'>
							&ldquo; {testimony.text} &rdquo;
						</h3>
						<Image
							src={testimony.image}
							alt=''
							height={100}
							width={100}
							className='rounded-full shadow-lg my-4'
						/>
						<h4>{testimony.name}</h4>
						<p className='opacity-50'>
							{testimony.institution}, {testimony.city}
						</p>
					</div>
				))}
			</section>

			<section
				id='contact'
				className='footer footer-center p-4 border-t-[1px]'>
				<div className='flex justify-evenly items-center w-full flex-wrap'>
					{/* Instagram */}
					<Link
						href='https://www.instagram.com/'
						className='flex'>
						<svg
							className='h-[3vh] w-[3vh]'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
						</svg>
						@f5_moments
					</Link>
					{/* Mail */}
					<Link
						href=''
						className='flex'>
						<EnvelopeIcon className='h-[3vh] w-[3vh]' />
						info@f5moments.org
					</Link>
					{/* Mobile */}
					<Link
						href=''
						className='flex'>
						<PhoneIcon className='h-[3vh] w-[3vh]' />
						+91-123-456-7890
					</Link>
				</div>
				<p>Copyright &copy; 2023 - All rights reserved</p>
			</section>
		</main>
	);
}
