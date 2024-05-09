import React, { useState, useEffect } from "react";
import { ScrollToTop } from "../ui/base/ScrollToTop";
import ScrollMotion from "../ui/components/AboutScrollMotion/ScrollMotion";
import Header from "../ui/components/Header/Header";
import Members from "../ui/components/Members/Members";
import Library from "../ui/components/Library/Library";
import Footer from "../ui/components/Footer/Footer";
const HomePage = () => {
  const [headColor, setHeadColor] = useState("white");
  const [headSolid, setHeadSolid] = useState(false);
  const [bottomShow, setBottomShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      window.scrollTo(0, 0);
    } else {
      setBottomShow(true);
    }
  }, [bottomShow]);
  return (
    <ScrollToTop>
      <Header color={headColor} solid={headSolid} />
      <ScrollMotion
        setHeadColor={setHeadColor}
        setHeadSolid={setHeadSolid}
        setBottomShow={setBottomShow}
      />
      {bottomShow ? (
        <>
          <Library />
          <Members />
          <Footer />
        </>
      ) : (
        ""
      )}
    </ScrollToTop>
  );
};

export default HomePage;
