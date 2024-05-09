import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import {
  LibraryWrapper,
  Row,
  Col,
  Content,
  ImageStyled,
  ImageWrapper,
  Title,
  Text,
} from "./LibraryStyled";

import arcadePic from "../../../static/images/Lib/arcadeLibPic.png";
import mathPic from "../../../static/images/Lib/mathLibPic.jpg";
import osPic from "../../../static/images/Lib/osLibPic.jpg";
import threadPic from "../../../static/images/Lib/threadLibPoc.jpg";
import socketPic from "../../../static/images/Lib/socketLibPic.jpg";
import { useMediaQuery } from "react-responsive";
import { Container } from "../../base/Container/Container";

const Library = () => {
  const arcadePicRef = useRef();
  const mathPicRef = useRef();
  const osPicRef = useRef();
  const socketPicRef = useRef();
  const threadPicRef = useRef();
  const firstRowRef = useRef();
  const secondRowRef = useRef();
  const thirdRowRef = useRef();
  const isTablet = useMediaQuery({ query: "(max-width: 1400px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    const images = [];
    const rows = [];
    images.push(arcadePicRef.current);
    images.push(osPicRef.current);
    images.push(socketPicRef.current);
    images.push(threadPicRef.current);
    images.push(mathPicRef.current);
    rows.push(firstRowRef.current);
    rows.push(secondRowRef.current);
    rows.push(thirdRowRef.current);
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
    <LibraryWrapper id="library">
      <Container>
        <Row ref={firstRowRef}>
          <Col mr={isTablet ? "7.8vw" : "130px"}>
            {isMobile && (
              <Content title={1}>
                <Title>
                  Share Your Talents <br />& Become a Teacher
                </Title>
                <Text>
                  Join our instructors' network and give classes in your
                  neighborhood
                </Text>
              </Content>
            )}
            <ImageWrapper ref={arcadePicRef} arcade className="mt-48">
              <ImageStyled src={arcadePic} alt="arcade Library" />
            </ImageWrapper>
            {!isMobile && (
              <Content second>
                <Title>Math Library</Title>
                <Text width={560}>
                  Hỗ trợ các hàm số học như gcd (ước chung lớn nhất), lcm (bội
                  chung nhỏ nhất), v.v. <br />
                  Cung cấp các hằng số toán học như pi, e (số Euler), v.v.
                </Text>
              </Content>
            )}
          </Col>
          <Col>
            {!isMobile && (
              <>
                <Content title={2}>
                  <Title>
                    Library <br />
                    We need you
                  </Title>
                  <Title>Arcade Library</Title>
                  <Text width={560}>
                    Cung cấp các chức năng để tạo ra các trò chơi 2D <br />
                    Hỗ trợ vẽ đồ họa, xử lý sự kiện từ bàn phím và chuột, và
                    quản lý trạng thái trò chơi. <br />
                    Cung cấp các lớp và phương thức để tạo và quản lý các đối
                    tượng trò chơi, như nhân vật, kẻ thù, điểm số, v.v.
                  </Text>
                </Content>
                <ImageWrapper ref={mathPicRef} math>
                  <ImageStyled
                    high={!isMobile ? 1 : 0}
                    wide={isMobile ? 1 : 0}
                    src={mathPic}
                    alt="Math Library"
                  />
                </ImageWrapper>
              </>
            )}
          </Col>
        </Row>
        <Row ref={secondRowRef}>
          <Col mr={isTablet ? "5.8vw" : "130px"}>
            {isMobile && (
              <Content second>
                <Title>Math Library</Title>
                <Text width={340}>
                  Choose your own locations for your class, your home, public
                  park, anywhere you can teach
                </Text>
              </Content>
            )}
            {isMobile ? (
              <ImageWrapper
                ref={mathPicRef}
                style={!isMobile ? { marginLeft: 60 } : {}}
                math
              >
                <ImageStyled wide={1} src={mathPic} alt="math" />
              </ImageWrapper>
            ) : (
              <ImageWrapper
                ref={osPicRef}
                style={!isMobile ? { marginLeft: 60 } : {}}
                os
              >
                <ImageStyled wide={1} src={osPic} alt="os" />
              </ImageWrapper>
            )}
            {!isMobile ? (
              <Content four>
                <Text width={560}>
                  <Title>Socket Library</Title>
                  Cung cấp các chức năng để tạo và quản lý các socket, cho phép
                  giao tiếp mạng ở mức thấp.
                  <br />
                  Một số hàm quan trọng bao gồm: socket(), bind(), listen(),
                  accept(), connect(), send(), và recv()
                </Text>
              </Content>
            ) : (
              <Content third>
                <Text big>
                  Manage your own schedule and give classes whenever you feel to
                </Text>
              </Content>
            )}
          </Col>
          <Col>
            {!isMobile && (
              <Content second>
                <Title>OS Library</Title>
                <Text style={isMobile ? { fontSize: "16px" } : {}} width={560}>
                  Cung cấp các chức năng để tương tác với hệ điều hành.
                  <br />
                  Cho phép thao tác với hệ thống tệp tin, bao gồm tạo, xóa, đổi
                  tên tệp tin và thư mục, và đọc nội dung của tệp tin.
                  <br />
                  Hỗ trợ việc thực thi các lệnh hệ điều hành và quản lý các tiến
                  trình.
                </Text>
              </Content>
            )}
            <ImageWrapper ref={socketPicRef} socket className="mt-20">
              <ImageStyled high={1} src={socketPic} alt="Socket Library" />
            </ImageWrapper>
          </Col>
        </Row>
        <Row ref={thirdRowRef}>
          {isMobile && (
            <Content four>
              <Text big>
                Receive payments through the app and keep track of your revenue
              </Text>
            </Content>
          )}
          <Col>
            <ImageWrapper
              ref={threadPicRef}
              style={{ marginTop: isMobile ? 0 : isTablet ? 55 : 85 }}
              thread
            >
              <ImageStyled
                high={isMobile ? 1 : 0}
                src={threadPic}
                alt="Thread Library"
              />
            </ImageWrapper>
          </Col>

          <Col className="ml-44">
            <Content four>
              <Title>Thread Library</Title>
              <Text width={560}>
                Cung cấp các chức năng cơ bản để làm việc với đa luồng
                (multithreading) <br />
                Một số hàm quan trọng bao gồm: start_new_thread(), get_ident(),
                exit(), và allocate_lock()
              </Text>
            </Content>
          </Col>
        </Row>
      </Container>
    </LibraryWrapper>
  );
};

export default Library;
