import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content justify-between">
      <div className="text-2xl font-semibold font-sans tracking-tight">
        QuickNotes
      </div>

      <Link to={"/create"} className="btn btn-primary">
        <PlusIcon className="size-6" />
        <span className="text-lg">New Note</span>
      </Link>
    </div>
  );
};

export default Navbar;
