import React from 'react';
import { Head , Link} from '@inertiajs/react';

const TeacherDashboard = () => {
    return (
        <div>
                            <Link href={route('logout')} method='post'> logout </Link>

            <h1>Teacher Dashboard</h1>
        </div>
    );
};

export default TeacherDashboard;