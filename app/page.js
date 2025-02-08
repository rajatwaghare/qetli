import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Image className=" w-full h-dvh object-cover " src='/coffeechery.jpg' alt='Next.js' width={1920} height={200} />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl text-center font-bold">coffee from small estates of India</h1>
      </div>
    </>
  );
}
