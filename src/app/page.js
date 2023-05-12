import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center snap-y snap-mandatory text-center">
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">F5 Moments</h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              eligendi neque aspernatur ad aut, repellat mollitia quisquam?
              Explicabo, tenetur quo.
            </p>
            <div className="flex justify-evenly items-center px-10">
              <button className="btn btn-primary">Invite Us</button>
              <button className="btn btn-outline">Volunteer</button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center h-[100vh] w-[50%] border-b-2 snap-center">
        <div className="h-[50%] flex flex-col justify-center items-center border-b-2 w-full">
          About
        </div>
        <div className="h-[50%] flex flex-col justify-center items-center w-full">
          Testimonials
        </div>
      </section>
      <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
        <div className="flex justify-evenly">
          {/* Instagram */}
          <svg
            className="h-[3vh] w-[3vh]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          {/* Mail */}
          <Link href="">
            <EnvelopeIcon className="h-[3vh] w-[3vh]" />
          </Link>
          {/* Mobile */}
          <Link href="">
            <PhoneIcon className="h-[3vh] w-[3vh]" />
          </Link>
          {/* Whatsapp */}
        </div>
        <p>Copyright &copy; 2023 - All rights reserved</p>
      </footer>
    </main>
  );
}
