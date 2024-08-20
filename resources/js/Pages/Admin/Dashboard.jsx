import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Navbar from '@/Components/Navbar/NavbarComponent'

import { Head , Link} from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <Link href={route('logout')} method='post'>
                Logout
                </Link>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in to the Admin Dashboard
                            !</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
