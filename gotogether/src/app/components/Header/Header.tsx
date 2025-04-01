import Logo from "./Logo";
import LeftLinks from "./LeftLinks";
import ContactButton from "./ContactButton";

const Header = () => {
  return (
    <nav className="w-full bg-white z-10 min-h-[80px]">
      <div className="px-6 sm:px-10 lg:px-[160px] w-full h-full">
        <div className="mx-auto h-full flex flex-col md:flex-row items-center justify-between"
          style={{
            maxWidth: "1120px",
            minHeight: "80px"
          }}
        >

          <div className="flex items-center lg:ml-[-95px]">
            <Logo />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 mt-3 sm:mt-0 lg:mr-[-85px]">
            <LeftLinks />
            <ContactButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;