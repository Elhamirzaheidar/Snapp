import { Link } from "react-router-dom"
import { imagesListSecond } from "../../../data/data"


function ContainerMain() {
  return (
   <>
       {imagesListSecond.map((image) => (
          <div
            className="imge   my-5 py-3 bg-white
             rounded-2xl  mx-2 w-2/3 sm:w-44 lg:mx-3 md:w-1/4 md:mx-6  lg:w-72  xl:w-64  2xl:w-64 2xl:mx-3
             "
            key={image.id}
          >
            <Link
              href={image.url}
              className="flex flex-col justify-center lg:flex-row lg:justify-start"
            >
              <div className="flex flex-wrap justify-center ">
                <img src={image.src} alt="" width={55} className=" lg:ms-4 " />
              </div>
              <div className="text md:mx-2">
                <h5 className="text-sm text-center lg:text-right font-bold py-2  ">
                  {image.title}
                </h5>
                <h6 className="hidden lg:block text-gray-400 text-sm">
                  {image.Describe}
                </h6>
              </div>
            </Link>
          </div>
        ))}
   
   </>
  )
}

export default ContainerMain