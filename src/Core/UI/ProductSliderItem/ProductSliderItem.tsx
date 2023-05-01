interface IProductSlider {
  src: string;
}

const ProductSliderItem = ({ src }: IProductSlider) => {
  return (
    <div className={"max-w-[148px] md:max-w-[230px]"}>
      <img src={src} className={"w-[148px] md:w-[230px]"} />
      <p className={"font-avenir text-xs mt-3"}>365 Signature Hoodie</p>
      <div className={"flex justify-between  mt-1"}>
        <p className={"font-avenir text-xs font-bold"}>€33.95</p>
        <div className={"flex gap-x-2"}>
          <div
            className={
              "h-2.5 w-2.5 bg-sky-150 rounded-full border border-black p-1"
            }
          ></div>
          <div className={"h-2.5 w-2.5 bg-rose-250 rounded-full"}></div>
          <div className={"h-2.5 w-2.5 bg-fuchsia-350 rounded-full"}></div>
          <div className={"h-2.5 w-2.5 bg-green-150 rounded-full"}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderItem;
