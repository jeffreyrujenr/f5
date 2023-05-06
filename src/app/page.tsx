import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center snap-y snap-mandatory text-center'>
			<section className='flex flex-col justify-center items-center h-[100vh] w-[50%] snap-center border-b-2'>
				<h1 className='text-9xl'>F5</h1>
				<p className='m-10'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
					veritatis, quisquam cumque maiores ab, nulla eos mollitia dolore
					maxime fugiat animi, eius repellat dicta sunt.
				</p>
				<div className='flex'>
					<button className='mx-4 py-1 px-3 rounded border-b-2'>
						Volunteer
					</button>
					<button className='mx-4 py-1 px-3 rounded border-b-2 bg-white text-black'>
						Invite
					</button>
					<button className='mx-4 py-1 px-3 rounded border-b-2'>Support</button>
				</div>
			</section>
			<section className='flex flex-col justify-center items-center h-[100vh] w-[50%] border-b-2 snap-center'>
				<div className='h-[50%] flex flex-col justify-center items-center border-b-2 w-full'>
					About
				</div>
				<div className='h-[50%] flex flex-col justify-center items-center w-full'>
					Testimonials
				</div>
			</section>
		</main>
	);
}
