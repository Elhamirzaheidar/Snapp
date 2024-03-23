import Button from "../../ui/Button/Button"

import ThirdSection from "../ThirdSection/ThirdSection"
import Video from"../../assets/Video/jazb-ranande.mp4"
function VideoSection() {
  return (
    <div className="VideoSections bg-gray-100">
    <h2 className="font-extrabold text-center pt-10 pb-4 text-gray-800 px-6 ">در کمتر از 10دقیقه ثبت نام کنید وبه ناوگان اسنپ بپیوندید.</h2>
    <h4 className="text-center text-gray-800 px-3">بدون نیاز به مراجعه حضوری،از طریق این صفحه،تمام مراحل ثبت نام را اینترنتی انجام دهید.</h4>

<Button Text={"ثبت نام رانندگان"} />

<div className="flex justify-center px-3 md:pb-10">
<video width="1025" height="500" controls className="rounded-lg"   >
      <source src={Video} type="video/mp4"/>
     </video></div>
   <ThirdSection/>  
   </div>
  )
}

export default VideoSection