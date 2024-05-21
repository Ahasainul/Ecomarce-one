import { useRef } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import List from "../components/List";
import Icons from "../iconss/Icons";
import Hadding from "../components/Hadding";
import { FaSearch, FaUser, FaAngleDown, FaShoppingCart } from "react-icons/fa";
import blank from "../assets/blnk.png";
import { useSelector } from "react-redux";

const Naver = () => {
  const cartItem = useSelector((state) => state.carts.cart);

  let DropReef = useRef(null);

  let DropReeff = useRef(null);
  let handelclick = () => {
    if (DropReef.current.style.display == "block") {
      DropReef.current.style.display = "none";
    } else {
      DropReef.current.style.display = "block";
    }
  };

  let handelclicktow = () => {
    if (DropReeff.current.style.display == "block") {
      DropReeff.current.style.display = "none";
    } else {
      DropReeff.current.style.display = "block";
    }
  };

  return (
    <>
      <Container>
        <div className="py-10">
          <Flex>
            <div className="w-2/5">
              <Link>
                {" "}
                <Image src={logo} alt="logo.png" />
              </Link>
            </div>
            <div className="">
              <ul>
                <Flex>
                  <Link to="/">
                    <List
                      className="mr-10 text-lg font-dm text-ash hover:text-black hover:font-bold"
                      manuName="Home"
                    />
                  </Link>
                  <Link to="shop/">
                    <List
                      className="mr-10 text-lg font-dm text-ash hover:text-black hover:font-bold"
                      manuName="Shop"
                    />
                  </Link>
                  <Link to="about/">
                    <List
                      className="mr-10 text-lg font-dm text-ash hover:text-black hover:font-bold"
                      manuName="About"
                    />
                  </Link>
                  <Link to="Contacts/">
                    <List
                      className="mr-10 text-lg font-dm text-ash hover:text-black hover:font-bold"
                      manuName="Contacts"
                    />
                  </Link>
                  <Link to="/">
                    <List
                      className="text-lg font-dm text-ash hover:text-black hover:font-bold"
                      manuName="Journal"
                    />
                  </Link>
                </Flex>
              </ul>
            </div>
          </Flex>
        </div>
      </Container>
      <div className="py-10 border bg-navBg border-borDer">
        <Container>
          <Flex className="items-center">
            <div className="w-1/4">
              <div onClick={handelclick}>
                <div className="relative flex items-center gap-2 ">
                  <button>
                    {" "}
                    <Icons />
                  </button>
                  <Hadding
                    className="font-semibold font-dm "
                    hedText="Shop by Category"
                  />
                  <div
                    className="w-[261px]  bg-[#262626] hidden  absolute top-10 left-0"
                    ref={DropReef}
                  >
                    <ul>
                      <List
                        className={
                          "hover:text-white text-[#BDBDBD] py-4 pl-5 border-b border-gry-500 "
                        }
                        manuName={"Accesories"}
                      />
                      <List
                        className={
                          "hover:text-white text-[#BDBDBD] py-4 pl-5 border-b border-gry-500 "
                        }
                        manuName={"Furniture"}
                      />
                      <List
                        className={
                          "hover:text-white text-[#BDBDBD] py-4 pl-5 border-b border-gry-500 "
                        }
                        manuName={"Electronics"}
                      />
                      <List
                        className={
                          "hover:text-white text-[#BDBDBD] py-4 pl-5 border-b border-gry-500 "
                        }
                        manuName={"Clothes"}
                      />
                      <List
                        className={
                          "hover:text-white text-[#BDBDBD] py-4 pl-5 border-b border-gry-500 "
                        }
                        manuName={"Bags"}
                      />
                      <List
                        className={
                          "hover:text-white text-[#BDBDBD] py-4 pl-5 border-b border-gry-500 "
                        }
                        manuName={"Home application"}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="relative ml-4 ">
                <input
                  className="w-full py-5 pl-5"
                  type="text"
                  placeholder="Search Products"
                />
                <FaSearch className="absolute right-10 top-6" />
              </div>
            </div>
            <div className="flex justify-end w-1/5 gap-10">
              <Flex className="gap-1">
                <Link to="login/">
                  <FaUser />
                </Link>
                <FaAngleDown />
              </Flex>

              <div className="relative" onClick={handelclicktow}>
                <FaShoppingCart className="cursor-pointer" />

                <div
                  className=" absolute top-8 left-[-300px] w-[357px] shadow-2xl   hidden  "
                  ref={DropReeff}
                >
                  <div className="bg-[#F5F5F3] py-5 px-5">
                    {/* Product Loop in AddToCart Modal */}
                    {cartItem?.map((el) => (
                      <>
                        <Flex className={"gap-5 items-center mb-1"}>
                          <Image src={blank} />
                          <div className="">
                            <p className="font-bold">{el.title}</p>
                            <h2 className="pt-2 font-bold">${el.price}</h2>
                          </div>
                        </Flex>
                      </>
                    ))}
                  </div>
                  <div className="px-5 py-5 bg-white">
                    <p>
                      Subtotal: <span className="font-bold"> $44.00</span>
                    </p>

                    <Flex className={"gap-4"}>
                      <button className="px-8 py-3 mt-5 font-semibold text-black border border-black hover:text-white hover:bg-black">
                        View Cart
                      </button>
                      <button className="px-8 py-3 mt-5 font-semibold text-black border border-black hover:text-white hover:bg-black">
                        Checkout
                      </button>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Naver;
