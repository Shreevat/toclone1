import { IoClose } from "react-icons/io5";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 h-full w-64 z-[1000] bg-slate-50 bg-opacity-40`} // Adjust width and background opacity
    >
      <div onClick={closeNav} className=" text-4xl absolute right-4 top-1">
        <IoClose />
      </div>
      <div className="nav-link-mobile">Home</div>
      <div className="nav-link-mobile">About</div>
      <div className="nav-link-mobile">Service</div>
      <div className="nav-link-mobile">Contact</div>
    </div>
  );
};

export default MobileNav;
