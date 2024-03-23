
import {BoxList} from '../../../data/data' ;

function Box() {
  return (
    <>
    <div className="BoxParent flex mx-2 flex-col  sm:flex-row  sm:justify-between md:flex  md:flex-row  md:justify-center ">
    {BoxList.map((item)=>(
    <div key={item.id} className='  md:mx-5 me-4 sm:me-0  md:w-1/5 lg:w-1/4 xl:w-1/6'>
    <img src={item.src} alt="image" className='w-full sm:w-48  md:w-11/12  px-32 bg-gray-100 mt-4 sm:px-0 md:px-0 lg:px-10 py-5  rounded-3xl  lg:-translate-y-20 2xl:-translate-y-1/3' />
       
          <div className="TextBox lg:mb-10 mx-3">
             <h2 className='text-gray-700 mt-2 lg:-mt-16 xl:-mt-10 '><strong>{item.Title}</strong> </h2>
             <p className='mt-2 text-gray-700 mb-8 '>{item.Describe}</p>
         </div> 
     </div>))}
    </div>
   
    </>
    

  )
}
// px-20
export default Box


{/* <div className="BoxParent flex flex-col justify-center sm:flex-wrap  md:flex-row  md:justify-center ">
{BoxList.map((item)=>(
<div key={item.id} className='mx-5 lg:w-1/6'>
<img src={item.src} alt="" className=' bg-gray-100 mt-4  sm:w-1/3 px-32 sm:px-10 md:px-10 lg:px-0 py-10 sm:bg-red-500 md:bg-yellow-500 lg:bg-green-500  rounded-3xl md:-translate-y-1/3 lg:-translate-y-1/3' />
   
      <div className="TextBox lg:mb-10 ">
         <h2 className='text-gray-700 mt-2 lg:-mt-10'><strong>{item.Title}</strong> </h2>
         <p className='mt-2 text-gray-700 mb-8'>{item.Describe}</p>
     </div> 
 </div>))}
</div>

</> */}