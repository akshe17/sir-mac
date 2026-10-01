import Link from "next/link";
import award1 from '../../public/award1.webp';

import award2 from '../../public/award2.jpg';
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-6">
      <nav className="flex items-center justify-between w-full border-b border-white/10 pb-4">
        <div>
          <Link 
            href={'/'} 
            className="text-xl font-bold tracking-widest hover:text-neutral-300 transition-colors"
          >
            EVE HARAPECO
          </Link>
        </div>

        <div className="flex items-center gap-6 text-sm tracking-wider">
          <Link href={'/biography'} className="text-neutral-400 hover:text-white transition-colors">
            Biography
          </Link>
          <Link href={'/albums'} className="text-neutral-400 hover:text-white transition-colors">
            Albums
          </Link>
          <Link href={'/songs'} className="text-neutral-400 hover:text-white transition-colors">
            Songs
          </Link>
          <Link href={'/awards'} className="text-neutral-400 hover:text-white transition-colors">
            Awards
          </Link>
        </div>
      </nav>
      <h1 className="text-5xl">AWARDS</h1>



      <main className="flex flex-row justify between p-4">

        <div>
           <Image
              src={award1}
              width={500}
              height={500}
              alt="image1"
              className="object-cover"
    
            />

            <Image
              src={award2}
              width={500}
              height={500}
              alt="image1"
              className="object-cover"
    
            />
        </div>

        <div>
          <h1 className="text-2xl">
The Japanese singer-songwriter Eve founded the clothing brand Harapeco in 2016 and previously used the indie label name Harapeco Records, but his music has won and been nominated for mainstream Japanese and international awards
    </h1>
        </div>

      </main>


      

    </div>
  );
}