import { Container } from "../../base/Container/Container";

const Footer = () => {
  return (
    <div className="h-24 px-4 border-solid border-t-2 border-blue-100">
      <Container wide>
        <div className="flex items-center justify-center h-full">
          <p className="text-center text-sky-dark text-base">
            Copyright © 2024 MysV. All rights reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
