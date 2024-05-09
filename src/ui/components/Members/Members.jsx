import QuangLongImage from "../../../static/images/Members/Quang_Long.jpg";
import ThaiViImage from "../../../static/images/Members/Thai_Vi.jpg";
import KhoiNguyenImage from "../../../static/images/Members/Khoi_Nguyen.jpg";
import QuocViImage from "../../../static/images/Members/Quoc_Vi.jpg";
import { Container } from "../../base/Container/Container";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const InfoMock = [
  {
    id: "thaiVi",
    img: ThaiViImage,
    title: "Lê Thái Vi",
    text: `Pressing Đồng Đội / Leader`,
  },
  {
    id: "quangLong",
    img: QuangLongImage,
    title: "Trịnh Quang Long",
    text: "Thánh Dí Deadline",
  },
  {
    id: "khoiNguyen",
    img: KhoiNguyenImage,
    title: "Lê Khôi Nguyên",
    text: "Leader của Leader",
  },
  {
    id: "quocVi",
    img: QuocViImage,
    title: "Hà Quốc Vĩ",
    text: "Đi bộ vuốt râu",
  },
];

const Members = () => {
  const firstRowRef = useRef();
  const firstPicRef = useRef();

  useEffect(() => {
    const images = [];
    const rows = [];
    images.push(firstPicRef.current);
    rows.push(firstRowRef.current);
    images.forEach((image) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: "50% 60%",
          end: "bottom top",
          toggleClass: "light",
          toggleActions: "play none play none",
        },
      });
    });
    rows.forEach((row) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: "20% 90%",
          toggleClass: "active",
          toggleActions: "play none play none",
        },
      });
    });
  }, []);
  return (
    <div className="px-4 mt-24 mb-24 font-main">
      <Container>
        <h2 className="text-center mb-10 font-bold text-5xl uppercase">
          About us
        </h2>
        <div
          className="flex gap-10 items-stretch justify-between flex-wrap max-w-7xl mx-auto"
          ref={firstRowRef}
        >
          {InfoMock.map((member) => (
            <div
              key={member.id}
              className="flex flex-1 flex-col items-center text-center p-5 rounded border-solid border-2"
            >
              <div
                className="h-60 w-2/3 rounded overflow-hidden"
                ref={firstPicRef}
              >
                <img
                  src={member.img}
                  alt={member.text}
                  className="h-full w-full object-cover"
                ></img>
              </div>

              <p className="text-gray-900 font-bold mt-5 text-2xl">
                {member.title}
              </p>
              <p className="text-gray-900 mt-4 text-xl">{member.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Members;
