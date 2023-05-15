'use client';

import {
	AcademicCapIcon,
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
	UserGroupIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const testimonials = [
	{
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores non esse sequi libero impedit',
		name: 'Name 1',
		city: 'City 1',
	},
	{
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores non esse sequi libero impedit',
		name: 'Name 2',
		city: 'City 2',
	},
	{
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores non esse sequi libero impedit',
		name: 'Name 3',
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
							F5 is a non-profit organization that trains and equips the
							churches to do School/Youth ministry in their locality
						</p>
						<div className='flex justify-evenly items-center px-10'>
							<Link
								href=''
								className='btn btn-primary'>
								Invite Us
							</Link>
							<Link
								href='https://docs.google.com/forms/d/1yIqavxRGwO2-281JZ1Y4k1iyjLHFtRpRBg4XXm2U96I'
								className='btn btn-outline backdrop-blur-xl'>
								Volunteer
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className='flex flex-col justify-center items-center min-h-screen'>
				<div className='stats stats-horizontal shadow'>
					<div className='stat'>
						<div className='stat-figure text-primary'>
							<UserGroupIcon
								width={20}
								height={20}
							/>
						</div>
						<div className='stat-title'>Students Reached</div>
						<div className='stat-value text-primary'>31000</div>
						<div className='stat-desc'>2017 - now</div>
					</div>
					<div className='stat'>
						<div className='stat-figure'>
							<AcademicCapIcon
								width={20}
								height={20}
							/>
						</div>
						<div className='stat-title'>Institutions</div>
						<div className='stat-value'>39</div>
						<div className='stat-desc'>2017 - now</div>
					</div>
					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<BuildingOffice2Icon
								width={20}
								height={20}
							/>
						</div>
						<div className='stat-title'>Cities</div>
						<div className='stat-value text-secondary'>7</div>
						<div className='stat-desc'>2017 - now</div>
					</div>
				</div>
			</section>

			<section className='flex flex-col justify-center items-center min-h-screen'>
				<div className='mockup-phone'>
					<div className='camera'></div>
					<div className='display'>
						<div className='artboard bg-white phone-1 p-4'>
							<div className='py-4'></div>
							<h3 className='mb-4 opacity-75'>We are coming to your city</h3>

							<div className='chat chat-end'>
								<div className='chat-bubble chat-bubble-success'>Bangalore</div>
							</div>
							<div className='chat chat-start'>
								<div className='chat-bubble chat-bubble-primary'>Chennai</div>
							</div>
							<div className='chat chat-end'>
								<div className='chat-bubble chat-bubble-success'>Trichy</div>
							</div>
							<div className='chat chat-start'>
								<div className='chat-bubble chat-bubble-primary'>Hyderabad</div>
							</div>
							<div className='chat chat-end'>
								<div className='chat-bubble chat-bubble-success'>Vizag</div>
							</div>
							<div className='chat chat-start'>
								<div className='chat-bubble chat-bubble-primary'>Madurai</div>
							</div>
							<div className='chat chat-end'>
								<div className='chat-bubble chat-bubble-success'>
									Tirunelveli
								</div>
							</div>
							<div className='chat chat-start'>
								<div className='chat-bubble chat-bubble-primary'>Hosur</div>
							</div>
						</div>
					</div>
				</div>
				<h2 className='py-16 text-3xl'>See you there!</h2>
			</section>

			{/* <section className='flex min-h-screen flex-col lg:flex-row w-full justify-evenly items-center '>
				{testimonials.map((testimony) => (
					<div
						key={testimony.name}
						className='flex flex-col justify-center items-center text-center my-8 lg:w-1/3'>
						<h3 className='text-2xl w-2/3 opacity-75'>
							&ldquo; {testimony.text} &rdquo;
						</h3>
						<h4>{testimony.name}</h4>
						<p className='opacity-50'>{testimony.city}</p>
					</div>
				))}
			</section> */}

			<section
				id='contact'
				className='footer footer-center p-4 border-t-[1px] backdrop-blur-xl bg-white/50'>
				<div className='flex justify-evenly items-center w-full flex-wrap'>
					{/* Instagram */}
					<Link
						href='https://www.instagram.com/'
						className='flex'>
						<svg
							className='h-[3vh] w-[3vh] mr-2'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
						</svg>
						@f5_moments
					</Link>
					{/* Mail */}
					<Link
						href='mailto:jeremiahjerry93@gmail.com'
						className='flex'>
						<EnvelopeIcon className='h-[3vh] w-[3vh] mr-2' />
						jeremiahjerry93@gmail.com
					</Link>
					{/* Mobile */}
					<Link
						href='tel:+919843209882'
						className='flex'>
						<PhoneIcon className='h-[3vh] w-[3vh] mr-2' />
						+91-9843209882
					</Link>
				</div>
				<p>Copyright &copy; 2023 - All rights reserved</p>
			</section>
		</main>
	);
}
