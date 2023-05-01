const ProductPageHeader = () => {
  return (
    <div
      className={
        "px-6 md:px-0 absolute -top-[190px] md:top-auto md:static mb-[74px]"
      }
    >
      <h1
        className={
          "font-itcdm text-white md:text-black text-xl md:text-3xl font-bold leading-6 md:leading-10"
        }
      >
        Everyday items, we have something to suit every occasion.
      </h1>
      <p
        className={
          "hidden md:block font-avenir text-base text-body leading-7 mt-3"
        }
      >
        At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
        tincidunt semper eu proin leo gravida cursus.
      </p>
      <button
        className={
          "font-avenir text-xs font-black mt-8 underline text-white md:black"
        }
      >
        Shop all everyday items
      </button>
    </div>
  );
};
export default ProductPageHeader;
