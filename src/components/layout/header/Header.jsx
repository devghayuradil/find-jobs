import { LogoIcon, SearchIcon } from "@/components/icons/icons";
import React from "react";
import Nav from "./Nav";
import Input from "antd/es/input/Input";
import GlobalButton from "@/components/ui/GlobalButton";
import UserImage from "./UserImage";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 bg-light-100">
      <div className="container">
        <div className="flex items-center">
          <div className="flex-[0_0_5%]">
           <NavLink to="/"><LogoIcon /></NavLink>
          </div>
          <div className="flex-[0_0_95%] xl:flex-[0_0_60%] hidden lg:block">
            <Nav />
          </div>
          <div className="flex-1 xl:flex-1">
            <div className="hidden xl:flex-end gap-3 ">
              <div>
                <Input
                  className="bg-accent-200 rounded-none border-none hover:bg-accent-200 px-5 py-[10px]"
                  size="large"
                  placeholder="Search"
                  prefix={<SearchIcon className="mr-4" />}
                />
              </div>
              <div>
                <GlobalButton>Resume Builder</GlobalButton>
              </div>
              <div>
                <UserImage />
              </div>
            </div>
            <div className="flex-end gap-3 lg:hidden">
              <UserImage className="w-[28px] h-[28px]" />
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
