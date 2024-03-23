
import image from "../../assets/Img/super-app.jpg"
import Box from "../../ui/Box/Box"


function SecondSection() {
 
  return (<>
  <div className="parentSection flex justify-end  ">
    <div className="wrapperSection lg:flex lg:justify-between ">
      <div className="FirstItem   ">
        <img src={image} alt="" className="lg:flex  lg:max-w-screen-sm xl:max-w-screen-md" />
      </div>
     
      <div className="SecondItem my-6  xl:my-8 px-5  md:px-15 lg:px-2 xl:px-10">
      <h2 className=" text-gray-800 lg:ps-5 pb-3"><strong> سوپراپ اسنپ؛پاسخی به تمام نیازها</strong></h2>
 <h5 className="text-justify text-gray-600 2xl:ps-5 2xl:pe-48 2xl:mt-5 ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</h5>
      </div>
     </div> 
    
  </div> 
  
  <Box/>
 </>
  )
}

export default SecondSection