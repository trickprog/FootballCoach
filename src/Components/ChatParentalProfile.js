import React from "react";
import pfp from "../assets/pfp.png";
export default function ChatParentalProfile() {
  return (
    <>
      <div className=" ml-3 my-6">
        <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white  ">
          Parent Profile
        </h4>
        <div class="w-full min-w-sm bg-transparent   ">
          <div class="flex justify-center px-4 pt-4">
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={pfp}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-white ">Augustus</h5>
              <span class="text-sm text-gray-500">Augustus@gmail.com</span>
              <a
                href="/chat"
                class="inline-flex items-center py-2 px-4 mt-2 text-sm font-medium text-white bg-green-500 rounded-md "
              >
                Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" ml-3 space-y-2">
        <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white  ">
          Profile Info
        </h4>
        {/* Email */}
        <div className="flex gap-5 items-center">
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1 0H1.9C0.855 0 0.00949999 0.7875 0.00949999 1.75L0 12.25C0 13.2125 0.855 14 1.9 14H17.1C18.145 14 19 13.2125 19 12.25V1.75C19 0.7875 18.145 0 17.1 0ZM16.72 3.71875L10.0035 7.58625C9.6995 7.76125 9.3005 7.76125 8.9965 7.58625L2.28 3.71875C2.0425 3.57875 1.9 3.3425 1.9 3.08875C1.9 2.5025 2.5935 2.1525 3.135 2.45875L9.5 6.125L15.865 2.45875C16.4065 2.1525 17.1 2.5025 17.1 3.08875C17.1 3.3425 16.9575 3.57875 16.72 3.71875Z"
              fill="#1DB954"
            />
          </svg>
          <div>
            {" "}
            <h4 class="self-center text-lg font-semibold whitespace-nowrap dark:text-white  ">
              Email
            </h4>
          </div>
        </div>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400 my-2">
          Huzayfah@gmail.com
        </p>
        {/* Phone */}
        <div className="flex gap-5 items-center">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5 21C16.2991 21 21 16.2991 21 10.5C21 4.70085 16.2991 0 10.5 0C4.70085 0 0 4.70085 0 10.5C0 16.2991 4.70085 21 10.5 21ZM13.8936 11.929L15.5148 13.5545C15.8371 13.8789 15.8266 14.4154 15.4938 14.7514L15.0297 15.2051L15.0192 15.1956C14.6303 15.4942 14.1683 15.6827 13.6815 15.7416C13.5765 15.7531 11.1247 15.9831 8.08185 12.9339C5.88 10.7278 5.06835 9.1014 5.2836 7.3227C5.30775 7.1001 5.36235 6.8796 5.4516 6.64755C5.5461 6.40395 5.6742 6.17715 5.8275 5.98185L5.8149 5.96925L6.27165 5.5083C6.6066 5.1723 7.1421 5.16285 7.4634 5.48625L9.08565 7.11165C9.408 7.43505 9.39855 7.97055 9.06465 8.30655L8.79375 8.5764L8.24565 9.12555C8.27548 9.1778 8.30488 9.23031 8.33385 9.28305L8.3349 9.2862C8.62155 9.80385 9.01425 10.5115 9.75765 11.256C10.501 12.0015 11.2066 12.3942 11.7232 12.6808L11.8839 12.7711L12.7008 11.9521C13.0357 11.6161 13.5702 11.6067 13.8936 11.9301V11.929Z"
              fill="#1DB954"
            />
          </svg>

          <div>
            {" "}
            <h4 class="self-center text-lg font-semibold whitespace-nowrap dark:text-white  ">
              Phone
            </h4>
          </div>
        </div>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400 my-2">
          +944223435543
        </p>
        {/* Position */}
        <div className="flex gap-6 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5745 7.02111L16.5957 4.34026C16.3404 3.95728 16.0851 3.5743 15.8298 3.31898C15.7021 3.44664 15.5745 3.44664 15.4468 3.70196L14.2979 6.89345L12.1277 7.78707L9.57447 5.87217L9.44681 3.06366L12.1277 1.14877C12.2553 1.02111 12.383 0.893451 12.383 0.765791C12 0.638132 11.4894 0.510472 11.1064 0.382812L8.68085 2.04239L6.51064 0.382812C6 0.510472 5.61702 0.638131 5.23404 0.893451C5.23404 1.02111 5.3617 1.14877 5.48936 1.14877L8.17021 3.06366L8.29787 5.87217L5.87234 7.53175L3.31915 6.76579L2.17021 3.82962C2.17021 3.70196 2.04255 3.5743 1.91489 3.44664L1.14894 4.59558L2.17021 7.27643L0 9.06366C0 9.5743 -1.23648e-07 9.95728 0.127659 10.4679C0.255319 10.4679 0.382979 10.4679 0.510638 10.3403L3.19149 8.17005L5.48936 8.80834L6.38298 11.6169L4.85106 13.5317L1.78723 13.6594C1.65957 13.6594 1.65957 13.7871 1.53191 13.7871C1.78723 14.2977 2.17021 14.6807 2.55319 15.0637L4.97872 14.936L5.87234 17.3615C6.25532 17.4892 6.6383 17.6169 7.14894 17.7445C7.14894 17.6169 7.2766 17.3615 7.14894 17.2339L6.12766 14.17L7.53191 12.5105H10.4681L11.4894 14.2977L10.2128 17.2339C10.0851 17.4892 10.2128 17.6169 10.3404 17.8722C10.7234 17.8722 11.1064 17.7445 11.4894 17.6169L12.6383 14.8083L15.5745 15.0637C15.8298 14.8083 16.0851 14.553 16.2128 14.17C16.0851 14.0424 15.9574 13.9147 15.7021 13.9147L12.383 13.5317L11.4894 11.7445L12.5106 8.80834L14.8085 7.91473L17.3617 9.95728C17.4894 10.0849 17.617 10.0849 17.7447 10.0849H17.8723C17.8723 9.70196 18 9.31898 18 9.06366V8.936L15.5745 7.02111ZM10.2128 11.1062H7.53191L6.6383 8.55303L8.93617 6.89345L11.1064 8.55303L10.2128 11.1062Z"
              fill="#1DB954"
            />
          </svg>

          <div>
            {" "}
            <h4 class="self-center text-lg font-semibold whitespace-nowrap dark:text-white  ">
              Position
            </h4>
          </div>
        </div>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400 my-2">
          Goalkeeper
        </p>
        {/* Gender */}
        <div className="flex gap-7 items-center">
          <svg
            width="14"
            height="19"
            viewBox="0 0 14 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00028 9.32868C9.57632 9.32868 11.6646 7.24039 11.6646 4.66434C11.6646 2.0883 9.57632 0 7.00028 0C4.42423 0 2.33594 2.0883 2.33594 4.66434C2.33594 7.24039 4.42423 9.32868 7.00028 9.32868Z"
              fill="#1DB954"
            />
            <path d="M14 15.1562V18.6335H0V15.1562" fill="#1DB954" />
            <path
              d="M14 15.7089V13.1552C14 11.6813 12.6986 10.4941 11.0824 10.4941H2.91756C1.30137 10.4941 0 11.6813 0 13.1552V15.7089"
              fill="#1DB954"
            />
          </svg>

          <div>
            {" "}
            <h4 class="self-center text-lg font-semibold whitespace-nowrap dark:text-white  ">
              Gender
            </h4>
          </div>
        </div>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400 my-2">
          Male
        </p>
      </div>
    </>
  );
}
