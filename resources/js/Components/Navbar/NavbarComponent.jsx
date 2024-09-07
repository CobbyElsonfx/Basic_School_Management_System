import { Navbar, HR } from "flowbite-react";
import { Link } from "@inertiajs/react";

const NavbarComponent = () => {
    return (
        <div>
            <Navbar rounded className="py-5 bg-background">
                <Navbar.Brand as={Link} href="">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Basic Sch.MS
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>

                        <Link href={route("admin.dashboard")} >
                            Home
                        </Link>
                    
                    
                        <Link href={route('register')} active >
                            Register
                        </Link>
                    
                    
                        <Link href={route('login')} active>
                            Login
                        </Link>
                    
                </Navbar.Collapse>
            </Navbar>
            <hr />
        </div>
    );
};

export default NavbarComponent;
