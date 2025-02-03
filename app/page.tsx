import Container from "./components/container/Container";
import Products from "./components/products/Products";
import Slider from "./components/slider/Sldier";

export default function Home() {
  return (
    <>
      <Container>
        <Slider />
        <Products />
      </Container>
    </>
  );
}
