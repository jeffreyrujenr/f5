import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar z-10 fixed backdrop-blur-xl rounded-xl bg-[#111]">
      {/* Desktop Navbar */}
      <div className="navbar-start hidden lg:flex">
        <Link href="/#hero" className="hover:opacity-75">
          <Image
            className="rounded-full h-[7vh] w-[7vh]"
            src="/logo/F5 Logo-color black.png"
            alt=""
            height={128}
            width={128}
          />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal z-10 bg-inherit">
          <li>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/1yIqavxRGwO2-281JZ1Y4k1iyjLHFtRpRBg4XXm2U96I"
            >
              Volunteer
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSelqQZVu2BybvBFAuQqh9hx9ksqNn-jCSbQKaQ-3JLSxlJGUQ/viewform"
            >
              Invite
            </Link>
          </li>
          {/* <li>
						<Link href=''>Support</Link>
					</li> */}
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden navbar-start">
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3Icon
              height={128}
              width={128}
              className="h-[5vh] w-[5vh] text-white"
            />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-6 p-2 shadow rounded-box w-52 bg-[#111]"
          >
            <li>
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/1yIqavxRGwO2-281JZ1Y4k1iyjLHFtRpRBg4XXm2U96I"
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSelqQZVu2BybvBFAuQqh9hx9ksqNn-jCSbQKaQ-3JLSxlJGUQ/viewform"
              >
                Invite
              </Link>
            </li>
            {/* <li>
							<Link href=''>Support</Link>
						</li> */}
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:hidden navbar-end">
        <Link href="/#hero" className="hover:opacity-75">
          <Image
            className="rounded-full h-[7vh] w-[7vh]"
            src="/logo/F5 Logo-color black.png"
            alt=""
            height={128}
            width={128}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
