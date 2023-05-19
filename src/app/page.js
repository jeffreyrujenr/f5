"use client";

import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const testimonials = [
  {
    text: "I am a superhero. I am not afraid. I will win in life with strength and confidence.",
    name: "Student",
    city: "Ramnad, India",
  },
  {
    text: "I sincerely appreciate the service and I pray that this will grow and reach many more students.",
    name: "Faculty",
    city: "Ramnad, India",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center text-center">
      <section className="hero min-h-screen" id="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">F5 MOMENTS</h1>
            <p className="py-6 text-xl">
              F5 is a non-profit organization that trains and equips the youth
              to face the challenges of life by reaching out to them through
              their schools and colleges.
            </p>
            <div className="flex justify-evenly items-center px-10">
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSelqQZVu2BybvBFAuQqh9hx9ksqNn-jCSbQKaQ-3JLSxlJGUQ/viewform"
                className="btn btn-primary"
              >
                Invite Us
              </Link>
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/1yIqavxRGwO2-281JZ1Y4k1iyjLHFtRpRBg4XXm2U96I"
                className="btn btn-outline backdrop-blur-xl"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen w-full">
        <h2 className="text-3xl opacity-75 my-8">Our Impact</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center w-[80%]">
          <div className="flex flex-col justify-center items-center backdrop-blur-xl border-[1px] rounded-xl bg-white/50 p-8 lg:border-[1px] w-[80%] lg:w-1/3">
            <h4 className="text-2xl opacity-75">Impacted</h4>
            <h2 className="flex text-5xl items-center">
              31000
              <UserGroupIcon
                width={64}
                height={64}
                className="ml-4 text-primary"
              />
            </h2>
            <h4 className="text-2xl opacity-50">Students</h4>
          </div>
          <div className="flex flex-col justify-center items-center backdrop-blur-xl border-[1px] rounded-xl bg-white/50 p-8 lg:border-[1px] w-[80%] lg:w-1/3">
            <h4 className="text-2xl opacity-75">Visited</h4>
            <h2 className="flex text-5xl items-center">
              39
              <AcademicCapIcon
                width={64}
                height={64}
                className="ml-4 text-success"
              />
            </h2>
            <h4 className="text-2xl opacity-50">Institutions</h4>
          </div>
          <div className="flex flex-col justify-center items-center backdrop-blur-xl border-[1px] rounded-xl bg-white/50 p-8 lg:border-[1px] w-[80%] lg:w-1/3">
            <h4 className="text-2xl opacity-75">Reached</h4>
            <h2 className="flex text-5xl items-center">
              7
              <BuildingOffice2Icon
                width={64}
                height={64}
                className="ml-4 text-warning"
              />
            </h2>
            <h4 className="text-2xl opacity-75">Cities</h4>
          </div>
        </div>
        <p className="opacity-50 p-4">2017 - now</p>
      </section>

      <section className="flex min-h-screen flex-col w-full justify-center items-center">
        <h2 className="text-3xl opacity-75 my-8">Testimonials</h2>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center w-[80%]">
          {testimonials.map((testimony) => (
            <div
              key={testimony.name}
              className="flex flex-col justify-center items-center text-center my-8 w-[80%] lg:w-1/2 lg:mx-4 p-8 rounded-xl backdrop-blur-xl border-[1px] bg-white/50 lg:border-[1px]"
            >
              <h3 className="text-2xl w-2/3 opacity-80">
                &ldquo; {testimony.text} &rdquo;
              </h3>
              <h4 className="text-xl opacity-60 mt-4">{testimony.name}</h4>
              <p className="opacity-30">{testimony.city}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen pt-32">
        <h2 className="mb-16 text-3xl opacity-75">
          F5 team will be reaching these cities in 2023
        </h2>
        <div className="grid grid-cols-2 grid-rows-4 gap-4 w-[80%] max-w-xl">
          <div className="grid-item">Bangalore</div>
          <div className="grid-item">Chennai</div>
          <div className="grid-item">Trichy</div>
          <div className="grid-item">Hyderabad</div>
          <div className="grid-item">Vizag</div>
          <div className="grid-item">Madurai</div>
          <div className="grid-item">Tirunelveli</div>
          <div className="grid-item">Hosur</div>
        </div>
        <h3 className="py-16 text-xl opacity-50">
          We are coming soon to a city near you!
        </h3>
      </section>

      <section
        id="contact"
        className="footer footer-center py-8 border-t-[1px] backdrop-blur-xl bg-white/50"
      >
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full flex-wrap">
          {/* Instagram */}
          <Link href="https://www.instagram.com/" className="flex">
            <svg
              className="h-[3vh] w-[3vh] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @f5_moments
          </Link>
          {/* Whatsapp */}
          <Link href="https://wa.me/919843209882" className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[3vh] w-[3vh] mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            +91-9843209882
          </Link>
          {/* Mail */}
          <Link href="mailto:jeremiahjerry93@gmail.com" className="flex">
            <EnvelopeIcon className="h-[3vh] w-[3vh] mr-2" />
            jeremiahjerry93@gmail.com
          </Link>
          {/* Mobile */}
          <Link href="tel:+919843209882" className="flex">
            <PhoneIcon className="h-[3vh] w-[3vh] mr-2" />
            +91-9843209882
          </Link>
        </div>
        <p>Copyright &copy; 2023 - All rights reserved</p>
      </section>
    </main>
  );
}
