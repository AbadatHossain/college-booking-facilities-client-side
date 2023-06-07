import Logo from "./Logo";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="fixed bg-sky-500   z-10 lg:w-[1280px] shadow-sm ">
      <div className="py-4 border-b-[1px]">
        <div className="flex flex-row items-center px-2 justify-between gap-3 md:gap-0  ">
          <Logo />
          <Search />
          <MenuDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
