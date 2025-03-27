import Logo from "./Logo";
import LeftLinks from "./LeftLinks";
import ContactButton from "./ContactButton";

const Header = () => {
  return (
    <nav className="header-container top-0 left-0 w-full bg-white z-10 min-h-[80px] px-4 sm:px-8">
      <div className="header-content h-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 mt-3 sm:mt-0">
          <LeftLinks />
          <ContactButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;