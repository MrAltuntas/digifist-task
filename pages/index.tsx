import { ProductPageHeader, ProductSlider } from "@/Core/index";

export default function Home() {
  return (
    <div className={"md:grid grid-cols-2 h-full"}>
      <img src={"/img/bg.png"} className={"md:h-screen"} />
      <div className={"relative md:pl-[120px] md:pr-[106px] md:pt-[96px]"}>
        <ProductPageHeader />
        <ProductSlider />
      </div>
    </div>
  );
}
