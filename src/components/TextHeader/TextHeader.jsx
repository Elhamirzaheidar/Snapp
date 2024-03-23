import { useState } from "react";
import FirstBtn from "../../ui/FirstBtn/FirstBtn";
import SecondBtn from "../../ui/SecondBtn/SecondBtn";


function TextHeader() {
  const [value, setValue] = useState("");

  function handlerButton() {}
  return (
    <div className="parent flex justify-end ">
      <div className="text w-full  mx-5  ">
        <h1 className="text-right md:ms-20 mt-16 md:mt-32  lg:mt-32 lg:mb-8">
          تجربه‌ی‌ زندگی‌ راحت‌ تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن‌ اسنپ!
        </h1>
        <p className="text_second  md:ms-20 md:me-10  xl:ms-52">
          از درخواست خودرو گرفته تا سفارش غذا،خریدسوپرمارکتی،خریدبلیط سفر،رزرو
          هتل و...را می توانید با اسنپ انجام دهید.
        </p>
        <div className="login hidden md:flex justify-evenly ">
          <div className="Input xl:me-52 xl:my-5  my-3 flex " dir="ltr">
            <div className="">
              {/* <img
                  src="../../src/assets/Img/icons8-100--16.png"
                  className=" mt-6 "
                  alt=""
                /> */}
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="۶۷۸۹××××۰۹"
              className="lg:me-0 xl:me-20 "
              dir="rtl"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="ThirdBtn  md:me-10 lg:me-32 xl:ms-15 2xl:me-20  me-24 my-5">
            <button
              onClick={handlerButton}
              className="p-3   xl:px-6 2xl:px-8  bg-white"
            >
              ارسال لینک
            </button>
          </div>
        </div>
        <FirstBtn />
        <SecondBtn />
      </div>

      <div className="img_intro hidden mt-20 lg:pt-0 md:flex   md:w-full"></div>
    </div>
  );
}

export default TextHeader;
