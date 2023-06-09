import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-gradient flex flex-col h-screen justify-center items-center text-white">
      <div className="flex sm:flex-col items-center justify-center p-4 rounded-xl bg-[#111]">
        {/* Form */}
        <form className="flex flex-col p-4">
          <h1 className="mb-8 text-2xl">Contact</h1>
          <label htmlFor="name">Name</label>
          <input
            className="bg-[#222] text-[#eee] py-2 px-6 rounded my-2"
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            className="bg-[#222] text-[#eee] py-2 px-6 rounded my-2"
            type="email"
            name="email"
            id="email"
          />
          <button className="bg-gradient py-2 px-6 rounded my-2" type="submit">
            Send
          </button>
        </form>
        {/* Social icons */}
        <div className="flex my-2">
          {/* Instagram */}
          <Link href="https://www.instagram.com/" className="flex mx-2">
            <svg
              className="h-[3vh] w-[3vh]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          {/* Whatsapp */}
          <Link href="https://wa.me/919843209882" className="flex mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[3vh] w-[3vh]"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </Link>
        </div>
        {/* Email & Mobile */}
        <div className="my-2">
          {/* Email */}
          <Link
            href="mailto:jeremiahjerry93@gmail.com"
            className="flex items-center"
          >
            <EnvelopeIcon className="h-[3vh] w-[3vh] my-2 mr-2" />
            jeremiahjerry93@gmail.com
          </Link>
          {/* Mobile */}
          <Link href="tel:+919843209882" className="flex items-center">
            <PhoneIcon className="h-[3vh] w-[3vh] my-2 mr-2" />
            +91-9843209882
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
