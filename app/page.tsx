import { PiArrowFatLineRightDuotone } from "react-icons/pi";
import Container from "./components/container/Container";
import SectionTitle from "./components/sectionTitle/SectionTitle";
import Slider from "./components/slider/Sldier";

export default function Home() {
  return (
    <>
      <Container>
        <Slider />
        <SectionTitle
          title="Title"
          subTitle="Subtitle"
          linkTitle="LinkTitle"
          link="#"
          linkIcon={<PiArrowFatLineRightDuotone />}
          allClass="border border-gray-200 p-5"
        />
      </Container>
    </>
  );
}
