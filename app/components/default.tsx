"use client";
import { Button, ButtonGroup, DarkThemeToggle, Navbar } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import { MdDownload } from "react-icons/md";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-slate-200 dark:bg-gray-800 ">
      <Navbar className=" max-w-screen-lg mx-auto bg-transparent">
        <Navbar.Brand href="https://flowbite.com">
          <img
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-slate-300 text-gray-700">
            Nomad Portfolio
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-2">
          <DarkThemeToggle
            theme={{
              root: {
                icon: " focus:ring-gray-700 border-0 w-5 h-5",
              },
            }}
          />

          <Button
            color="gray"
            outline
            size="sm"
            theme={{
              color: {
                gray: ":ring-slate-700 border border-slate-200 bg-white text-gray-900 focus:text-slate-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-slate-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
              },
            }}
          >
            <Link href="#" className="inline-flex items-center">
              <span>CV</span>
              <MdDownload className="ml-2" />
            </Link>
          </Button>

          <Navbar.Toggle
            theme={{
              icon: "h-5 w-5 shrink-0 fill-gray-700 dark:fill-slate-300",
            }}
          />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
          }}
          className="lg:order-1 active:min-h-screen"
        >
          <Navbar.Link
            active
            theme={{
              active: {
                on: "bg-slate-600 text-white dark:text-white  md:bg-transparent md:text-slate-700",
              },
            }}
            href="#"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Projects</Navbar.Link>
          <Navbar.Link href="#">Blog</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;