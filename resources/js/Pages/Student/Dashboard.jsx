import React from 'react';
import { Head , Link} from '@inertiajs/react';


const StudentDashboard = () => {
  return (
    <div>
      <header>
        <h1>Wecloe to the students Dashbaord</h1>
      </header>
      <section>
        <h2>Section 1</h2>
        <Link href={route('logout')} method='post'> logout </Link>

      </section>
      <section>
        <h2>Section 2</h2>
        <p>This is the second section.</p>
      </section>
      <section>
        <h2>Section 3</h2>
        <p>This is the third section.</p>
      </section>
    </div>
  );
};

export default StudentDashboard;