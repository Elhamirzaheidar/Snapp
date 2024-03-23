import { ThirdSectionList } from "../../../data/data"

function ThirdSection() {
  return (
    <>
    <div className="ThirdSectionParent flex flex-wrap   md:justify-center -px-4 md:bg-red-400 lg:bg-green-500 ">
  
    {ThirdSectionList.map((item)=>(
    <div key={item.id} className=' bg-white  md:w-full  lg:w-1/3  lg:py-10 flex flex-col lg:flex-row lg:justify-between my-5 rounded-2xl mx-3 md:px-1'>
    <img src={item.src} alt="" className='px-40 sm:px-60 md:px-80  lg:px-0 py-5  lg:w-32' />
       
          <div className="ThirdSectionBox flex flex-col justify-center py-5 mx-5 ">
             <h2 className='text-gray-700  py-2 md:py-0 '><strong>{item.Title}</strong> </h2>
             <p className=' text-gray-700 pb-5 lg:pb-0 '>{item.Describe}</p>
         </div> 
     </div>))}
    </div>
    </>
   
  )
}
export default ThirdSection