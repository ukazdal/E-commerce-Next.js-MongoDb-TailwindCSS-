import Logo from "./Logo";
import Search from "./Search";
import CardCount from "./CardCount";
import UserLogin from "./UserLogin";
import HamburgerMenu from "./HamburgerMenu";
import Category from "../home/Category";
import Container from "../container/Container";
import { getCurrentUser } from "../../../app/actions/getCurentUser";

const Navbar = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="bg-gray-800 text-white">
      <Container>
        <div className="grid grid-cols-12 px-4 lg:px-10 gap-3 lg:gap-10 items-center">
          <div className="col-span-3 md:col-span-2 lg:col-span-3">
            <Logo />
          </div>

          <div className="col-span-6 md:col-span-8 lg:col-span-6">
            <Search />
          </div>

          <div className="col-span-3  md:col-span-2 lg:col-span-3 flex items-center justify-end gap-4">
            <CardCount />
            <UserLogin currentUser={currentUser} />
            <HamburgerMenu />
          </div>
        </div>
      </Container>
      <div className="hidden lg:block">
        <Category />
      </div>
    </div>
  );
};

export default Navbar;
