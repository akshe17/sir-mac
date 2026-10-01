import Image from "next/image";
import image1 from '../../public/image1.jpg';
import image2 from '../../public/image2.jpg';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 ">
      <div className="max-w-3xl w-full flex flex-col items-center text-center gap-12 bg-black p-8">
        
     
        <header className="m-2">

          <h1 className="text-4xl  text-white">
            Hi, my name is Vladimer Tuyor <br />
            FABIT-IT3-02
          </h1>
        </header>


        <section className="flex flex-col flex-row gap-6 w-full justify-center items-center">
          <div className="overflow-hidden " >
            <Image
              src={image1}
              width={220}
              height={220}
              alt="image1"
              className="object-cover"
              priority
            />
          </div>

          <div className="overflow-hidden  ">
            <Image
              src={image2}
              alt="image2"
              width={220}
              height={220}
              className="object-cover"
              priority
            />
          </div>
        </section>

   
        <section className=" text-left  pt-8 w-full">
          <h2 className="text-2xl font-bold tracking-wide uppercase text-left text-center text-white">
            About Me
          </h2>
          <p className="text-lg text-left text-center  text-white">
            I'm a <span className="font-semibold text-white">3rd-year I.T. student</span> i do web dev projects and I like to watch animes. My fav character is Rohan Kishibe, my fav line from him is <br /> <br /> "Reality is the lifeblood that makes a work pulse with energy."
          </p>
        </section>

      </div>
    </main>
  );
}
