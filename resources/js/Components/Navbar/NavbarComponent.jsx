
import { Navbar , HR } from "flowbite-react";
import { Link } from "@inertiajs/react";

const NavbarComponent = () => {
  return (
    <div>
          <Navbar  rounded className="py-5 bg-background">
      <Navbar.Brand as={Link} href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <hr/>



      
    </div>

  );
}

export default NavbarComponent;
