import Logo from "../assets/logo.png";
const Header = () => {
   return (
      <div className="px-8 py-2  bg-gradient-to-b from-black">
         <img className="w-44" src={Logo} />
      </div>
   );
};

export default Header;
