
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { training } from "@/data/training";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openTraining, setOpenTraining] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // MOBILE STATES
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileTraining, setMobileTraining] = useState(false);

  const pathname = usePathname();

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // PREVENT BACKGROUND SCROLL
  useEffect(() => {
    if (!mobileMenu) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenu]);

  // CLOSE MENUS ON ROUTE CHANGE
  useEffect(() => {
    setMobileMenu(false);
    setMobileServices(false);
    setMobileTraining(false);
    setOpen(false);
    setOpenTraining(false);
  }, [pathname]);

  // CLOSE MOBILE MENU
  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileServices(false);
    setMobileTraining(false);
  };

  // DESKTOP NAV LINK STYLE
  const navLink = (path) =>
    `cursor-pointer transition-all duration-200 ${
      pathname === path
        ? "font-semibold text-[var(--color-teal-400)]"
        : scrolled
        ? "text-black hover:text-[var(--color-teal-400)]"
        : "text-white hover:text-[var(--color-teal-400)]"
    }`;

  // MOBILE NAV LINK STYLE
  const mobileNavLink = (path) =>
    `block rounded px-3 py-2.5 transition-all duration-200 ${
      pathname === path
        ? "bg-[var(--color-teal-400)] text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  // DESKTOP DROPDOWN LINK STYLE
  const dropdownLink = `
    group relative block
    rounded-xl
    border border-gray-200
    bg-white
    px-5 py-4
    font-bold text-gray-700
    shadow-sm
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-lg
    hover:bg-[var(--color-teal-400)]
    hover:text-white
    focus-visible:bg-[var(--color-teal-400)]
    focus-visible:text-white
  `;

  // MOBILE DROPDOWN LINK STYLE
  const mobileDropdownLink = `
    block rounded
    px-3 py-2.5
    text-sm text-gray-300
    transition-all duration-200
    hover:bg-[var(--color-teal-400)]
    hover:text-white
  `;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed left-0 top-0 z-50
          flex w-full items-center
          justify-between
          px-4 py-3
          transition-all duration-500 ease-in-out
          sm:px-6
          lg:px-8
          xl:px-12
          2xl:px-16
          ${
            scrolled
              ? "bg-white/95 shadow-lg backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="group relative z-10 flex shrink-0 items-center"
          aria-label="Zisan Tech Solutions Home"
        >
          <img
            src="/images/logo/ZisanTech_Solutions_logo.png"
            alt="Zisan Tech Solutions logo"
            className="
              h-[48px] w-[145px]
              object-contain
              transition duration-300
              group-hover:scale-105
              group-hover:brightness-125
              sm:h-[54px] sm:w-[165px]
              xl:h-[62px] xl:w-[191px]
            "
          />
        </Link>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenu(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenu}
          aria-controls="mobile-navigation"
          className={`
            ml-auto inline-flex
            h-11 w-11 items-center
            justify-center rounded-lg
            text-2xl
            xl:hidden
            ${
              scrolled
                ? "text-black"
                : "text-white"
            }
          `}
        >
          ☰
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <nav
          aria-label="Desktop navigation"
          className="
            hidden min-w-0
            items-center justify-center
            gap-5 text-base font-bold
            xl:flex
            2xl:gap-8 2xl:text-lg
          "
        >
          {/* HOME */}
          <Link
            href="/"
            className={navLink("/")}
          >
            Home
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            className={navLink("/about")}
          >
            About
          </Link>

          {/* ================= SERVICES ================= */}
          <div
            className="relative"
            onMouseEnter={() => {
              setOpen(true);
              setOpenTraining(false);
            }}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setOpen((prev) => !prev);
                setOpenTraining(false);
              }}
              aria-expanded={open}
              aria-controls="desktop-services-menu"
              className={`${navLink("#")} font-bold`}
            >
              Services ▾
            </button>

            {/* SERVICES MEGA MENU */}
            <div
              id="desktop-services-menu"
              className={`
                absolute left-1/2 top-full
                z-50
                w-[min(900px,calc(100vw-48px))]
                -translate-x-1/2
                pt-4
                transition-all duration-300
                ${
                  open
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-4 opacity-0"
                }
              `}
            >
              <div
                className="
                  max-h-[min(75vh,600px)]
                  overflow-y-auto
                  rounded-xl bg-white p-6
                  text-[#1a2a6c] shadow-2xl
                  2xl:p-8
                "
              >
                <div className="grid grid-cols-2 gap-10">
                  {/* SAP SERVICES */}
                  <div className="min-w-0">
                    <h3
                      className="
                        sticky top-0 z-10
                        mb-4 bg-white
                        font-bold text-orange-500
                      "
                    >
                      SAP SERVICES →
                    </h3>

                    <div
                      className="
                        scrollbar-custom
                        max-h-[350px]
                        space-y-4 overflow-y-auto pr-2
                      "
                    >
                      {services[0]?.category?.map(
                        (item) => (
                          <Link
                            key={item.id}
                            href={`/services1/${services[0].type}/${item.id}`}
                            onClick={() => setOpen(false)}
                            className={dropdownLink}
                          >
                            <span
                              className="
                                flex items-center
                                justify-between gap-3
                              "
                            >
                              <span>{item.title}</span>

                              <span
                                className="
                                  shrink-0
                                  transition-transform duration-300
                                  group-hover:translate-x-1
                                "
                              >
                                →
                              </span>
                            </span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  {/* OTHER SERVICES */}
                  <div className="min-w-0">
                    <h3
                      className="
                        sticky top-0 z-10
                        mb-4 bg-white
                        font-bold text-orange-500
                      "
                    >
                      OTHER SERVICES →
                    </h3>

                    <div
                      className="
                        scrollbar-custom
                        max-h-[350px]
                        space-y-4 overflow-y-auto pr-2
                      "
                    >
                      {services[1]?.category?.map(
                        (item) => (
                          <Link
                            key={item.id}
                            href={`/services1/${services[1].type}/${item.id}`}
                            onClick={() => setOpen(false)}
                            className={dropdownLink}
                          >
                            <span
                              className="
                                flex items-center
                                justify-between gap-3
                              "
                            >
                              <span>{item.title}</span>

                              <span
                                className="
                                  shrink-0
                                  transition-transform duration-300
                                  group-hover:translate-x-1
                                "
                              >
                                →
                              </span>
                            </span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= TRAINING ================= */}
          <div
            className="relative"
            onMouseEnter={() => {
              setOpenTraining(true);
              setOpen(false);
            }}
            onMouseLeave={() => setOpenTraining(false)}
          >
            <button
              type="button"
              onClick={() => {
                setOpenTraining((prev) => !prev);
                setOpen(false);
              }}
              aria-expanded={openTraining}
              aria-controls="desktop-training-menu"
              className={`${navLink("#")} font-bold`}
            >
              Training ▾
            </button>

            {/* TRAINING MEGA MENU */}
            <div
              id="desktop-training-menu"
              className={`
                absolute left-1/2 top-full
                z-50
                w-[min(900px,calc(100vw-48px))]
                -translate-x-1/2
                pt-4
                transition-all duration-300
                ${
                  openTraining
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-4 opacity-0"
                }
              `}
            >
              <div
                className="
                  max-h-[min(75vh,600px)]
                  overflow-y-auto
                  rounded-xl bg-white p-6
                  text-[#1a2a6c] shadow-2xl
                  2xl:p-8
                "
              >
                <div className="grid grid-cols-2 gap-10">
                  {training.map((group) => (
                    <div
                      key={group.id}
                      className="min-w-0"
                    >
                      <h3
                        className="
                          mb-6 font-bold text-orange-500
                        "
                      >
                        {group.type} →
                      </h3>

                      <div
                        className="
                          scrollbar-custom
                          max-h-[350px]
                          space-y-4 overflow-y-auto pr-2
                        "
                      >
                        {group.category?.map(
                          (item) => (
                            <Link
                              key={item.id}
                              href={`/trainingprogrammes/${group.type}/${item.id}`}
                              onClick={() =>
                                setOpenTraining(false)
                              }
                              className={dropdownLink}
                            >
                              {item.title}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={navLink("/contact")}
          >
            Contact
          </Link>

          {/* CAREER */}
          <Link
            href="/career"
            className={navLink("/career")}
          >
            Career
          </Link>
        </nav>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        aria-hidden="true"
        onClick={closeMobileMenu}
        className={`
          fixed inset-0 z-[9998]
          bg-black/50
          transition-all duration-300
          xl:hidden
          ${
            mobileMenu
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenu}
        inert={!mobileMenu}
        className={`
          fixed inset-y-0 left-0
          z-[9999]
          flex w-[min(340px,85vw)]
          flex-col bg-[#111827]
          transition-transform duration-300
          xl:hidden
          ${
            mobileMenu
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* SIDEBAR HEADER */}
        <div
          className="
            flex shrink-0 items-center
            justify-between gap-3
            border-b border-gray-700
            px-5 py-4
          "
        >
          <img
            src="/images/logo.jpg"
            alt="Zisan Tech Solutions"
            className="w-16 object-contain"
          />

          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="
              flex h-10 w-10
              shrink-0 items-center
              justify-center rounded-lg
              text-xl text-white
              hover:bg-gray-700
            "
          >
            ✕
          </button>
        </div>

        {/* SCROLLABLE MOBILE LINKS */}
        <nav
          aria-label="Mobile navigation links"
          className="
            min-h-0 flex-1
            space-y-1
            overflow-y-auto
            overscroll-contain
            px-4 py-5
            text-base font-medium
          "
        >
          {/* HOME */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className={mobileNavLink("/")}
          >
            Home
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className={mobileNavLink("/about")}
          >
            About
          </Link>

          {/* ================= MOBILE SERVICES ================= */}
          <div>
            <button
              type="button"
              onClick={() =>
                setMobileServices((prev) => !prev)
              }
              aria-expanded={mobileServices}
              className="
                flex w-full items-center
                justify-between rounded
                px-3 py-2.5
                text-left text-gray-300
                transition-all duration-200
                hover:bg-gray-700
                hover:text-white
              "
            >
              <span>Services</span>
              <span>
                {mobileServices ? "▴" : "▾"}
              </span>
            </button>

            {mobileServices && (
              <div
                className="
                  ml-3 mt-2 space-y-4
                  border-l border-gray-700
                  pl-3 pb-2
                "
              >
                {services.map((group, index) => (
                  <div
                    key={group.type ?? index}
                    className="space-y-2"
                  >
                    <h3
                      className="
                        px-3 text-sm font-bold
                        text-orange-500
                      "
                    >
                      {index === 0
                        ? "SAP SERVICES"
                        : index === 1
                        ? "OTHER SERVICES"
                        : group.type}
                    </h3>

                    {group.category?.map((item) => (
                      <Link
                        key={item.id}
                        href={`/services1/${group.type}/${item.id}`}
                        onClick={closeMobileMenu}
                        className={mobileDropdownLink}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ================= MOBILE TRAINING ================= */}
          <div>
            <button
              type="button"
              onClick={() =>
                setMobileTraining((prev) => !prev)
              }
              aria-expanded={mobileTraining}
              className="
                flex w-full items-center
                justify-between rounded
                px-3 py-2.5
                text-left text-gray-300
                transition-all duration-200
                hover:bg-gray-700
                hover:text-white
              "
            >
              <span>Training</span>
              <span>
                {mobileTraining ? "▴" : "▾"}
              </span>
            </button>

            {mobileTraining && (
              <div
                className="
                  ml-3 mt-2 space-y-4
                  border-l border-gray-700
                  pl-3 pb-2
                "
              >
                {training.map((group) => (
                  <div
                    key={group.id}
                    className="space-y-2"
                  >
                    <h3
                      className="
                        px-3 text-sm font-bold
                        text-orange-500
                      "
                    >
                      {group.type}
                    </h3>

                    {group.category?.map((item) => (
                      <Link
                        key={item.id}
                        href={`/trainingprogrammes/${group.type}/${item.id}`}
                        onClick={closeMobileMenu}
                        className={mobileDropdownLink}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className={mobileNavLink("/contact")}
          >
            Contact
          </Link>

          {/* CAREER */}
          <Link
            href="/career"
            onClick={closeMobileMenu}
            className={mobileNavLink("/career")}
          >
            Career
          </Link>
        </nav>
      </aside>
    </>
  );
}
