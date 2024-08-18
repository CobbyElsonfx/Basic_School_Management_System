import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/NavbarComponent";
import ImagesObect from "@/Components/Assets/index";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
 
    return (
        <>
        <Navbar />
        <section className="bg-background dark:bg-gray-900 min-h-screen mt-8">
  <div className="container mx-auto p-4 flex flex-col lg:flex-row lg:space-x-4">
    <div className="flex-1 lg:flex-none lg:w-2/3 lg:pr-4">
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4 bg-background dark:bg-gray-800">
          {/* Content for the top-left section */}
          <a
                href="#"
                className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                role="alert"
            >
                <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                    New
                </span>
                <span className="text-sm font-medium">
                    Flowbite is out! See what's new
                </span>
            </a>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-6xl dark:text-white">
                All in one Place Management System
            </h1>
            <p className="mb-8 text-md font-normal text-gray-500 lg:text-md w-[70%] dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and
                drive economic growth.
            </p>
        </div>
        <div className="flex-1 p-4  rounded-md dark:bg-gray-700">
  {/* Flex container for three sub-columns */}
  <div className="flex space-x-4 md:h-[10rem]">
    {/* Sub-column 1 */}
    <div className="flex-1  p-4 bg-grayish_green dark:bg-gray-600 rounded-md ">
      <h2 className="text-md font-bold">Sub-column 1</h2>
      <p>Content for sub-column 1.</p>
    </div>

    {/* Sub-column 2 */}
    <div className="flex-1 p-4 bg-grayish_green dark:bg-gray-500 rounded-md">
      <h2 className="text-md font-bold">Sub-column 2</h2>
      <p>Content for sub-column 2.</p>
    </div>

    {/* Sub-column 3 */}
    <div className="flex-1 p-4 bg-grayish_green dark:bg-gray-400  rounded-md" >
      <h2 className="text-md font-bold">Sub-column 3</h2>
      <p>Content for sub-column 3.</p>
    </div>
  </div>
</div>

      </div>
    </div>
    <div className="flex-1 lg:w-1/3">
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4">
        <div className="md:col-span-1 md:row-span-2 flex items-center justify-center">
            <img
                src={ImagesObect.student}
                alt="Student"
                className=" w-[100%]" // Adjust size as needed
            />
        </div>
        </div>
      </div>
    </div>
  </div>
</section>


                 
        {/* <section className="bg-background dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
       
    
           
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a
                    href="#"
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                    Learn more
                </a>
                <a
                    href="#"
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                   
                    Watch video
                </a>
            </div>
            
     
        </div>
        <div className="md:col-span-1 md:row-span-2 flex items-center justify-center">
            <img
                src={ImagesObect.student}
                alt="Student"
                className="max-h-100" // Adjust size as needed
            />
        </div>
    </div>
</section> */}




        </>
    );
}
