import ContainerMain from "../ContainerMain/ContainerMain";
export default function Main() {
  return (
    <section className="bg-gray-100 py-8">
      <h2 className=" text-center text-xl  md:text-4xl font-black md:py-2">
        یک اپلیکشن،برای تمام نیازها
      </h2>
      <div
        className="containers flex flex-wrap justify-center  sm:basis-32  px-3 my-2 md:px-8  xl:px-52
           2xl:px-80 md:rounded-2xl "
      >
        <ContainerMain/>
    </div>
    </section>
  );
}
