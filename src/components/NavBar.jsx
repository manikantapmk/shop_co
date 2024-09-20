import React from "react";

const NavBar = () => {
  // {
  //     // JavaScript to toggle the dropdown
  //         const dropdownButton = document.getElementById('dropdown-button');
  //         const dropdownMenu = document.getElementById('dropdown-menu');
  //         const searchInput = document.getElementById('search-input');
  //         let isOpen = false; // Set to true to open the dropdown by default

  //         // Function to toggle the dropdown state
  //         function toggleDropdown() {
  //           isOpen = !isOpen;
  //           dropdownMenu.classList.toggle('hidden', !isOpen);
  //         }

  //         // Set initial state
  //         toggleDropdown();

  //         dropdownButton.addEventListener('click', () => {
  //           toggleDropdown();
  //         });

  //         // Add event listener to filter items based on input
  //         searchInput.addEventListener('input', () => {
  //           const searchTerm = searchInput.value.toLowerCase();
  //           const items = dropdownMenu.querySelectorAll('a');

  //           items.forEach((item) => {
  //             const text = item.textContent.toLowerCase();
  //             if (text.includes(searchTerm)) {
  //               item.style.display = 'block';
  //             } else {
  //               item.style.display = 'none';
  //             }
  //           });
  //         });
  // }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl tracking-tight">
            <h2 className="">SHOP.CO</h2>
          </span>
        </div>
        <div className="block lg:hidden ">
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
            {/* SHOPPOING DROPDOWN */}
            <div className="flex items-center justify-center">
              <div className="relative group">
                <button
                  id="dropdown-button"
                  className="inline-flex justify-center w-full text-sm font-medium rounded-md focus:outline-none  focus:ring-offset-gray-100"
                >
                  <span className="mr-2">Open Dropdown</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-menu"
                  className="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                  >
                    Uppercase
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                  >
                    Lowercase
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                  >
                    Camel Case
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                  >
                    Kebab Case
                  </a>
                </div>
              </div>
            </div>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 md:dark:bg-transparent"
                aria-current="page"
              >
                On Sale
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 md:dark:bg-transparent"
                aria-current="page"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 md:dark:bg-transparent"
                aria-current="page"
              >
                Brands
              </a>
            </li>
          </ul>
        </div>
        {/* SEARCH BAR */}
        <div className="pt-2 relative lg:mr-2 mx-auto text-gray-600">
          <input
            className=" bg-gray-100 h-10 px-5 pr-16 lg:pr-36 rounded-full text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search for products..."
          />
          <button type="submit" className="absolute right-0 top-0 mt-4 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex ">
          <a
            href="#"
            className="block text-md px-2 py-2 rounded ml-2 font-bold mt-4 lg:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </a>

          <a
            href="#"
            className="block text-md px-2 py-2 rounded ml-2 font-bold mt-4 lg:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
