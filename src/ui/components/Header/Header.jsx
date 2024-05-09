import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../base/Container/Container";

const Header = ({ solid, color }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-20 py-4  ${
        solid ? "bg-white" : "bg-transparent"
      } ${solid ? "shadow-sm" : "none"}`}
    >
      <Container>
        <div className="flex items-center justify-between h-20 px-12 md:h-12 lg:h-16">
          <div className="font-main flex-grow w-fit self-center uppercase font-extrabold text-5xl ">
            <Link to={"#"}>
              <p className="text-shadow-sm">OSSD</p>
            </Link>
          </div>
          <nav className=" navigator flex flex-1 justify-between">
            {[
              ["Tổng quan", "#about"],
              ["Thành phần", "#component"],
              ["Tính năng", "#feature"],
              ["Thư viện", "#library"],
              ["Chúng tôi", "#members"],
            ].map(([title, url]) => (
              <a href={url}>
                <div
                  className={`font-main text-2xl cursor-pointer inline-flex font-semibold ${
                    color ? color : "text-gray-900"
                  } transition-colors hover:text-blue-500 uppercase`}
                >
                  {title}
                </div>
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
