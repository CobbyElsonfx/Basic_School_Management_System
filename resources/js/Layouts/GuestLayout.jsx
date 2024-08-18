import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center sm:align-middle  items-center pt-6  sm:pt-0 bg-red">
        

            <div className="md:w-full sm:max-w-md mt-6 px-6 py-4 bg-background shadow-md  overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
