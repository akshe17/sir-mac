import Link from "next/link";
import album1 from '../../public/album1.jpg';

import album2 from '../../public/album2.jpg'
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

    <h1 className="text-5xl">ALBUMS</h1>




      <div className="flex flex-row justify between p-4">

        <div>
           <Image
              src={album1}
              width={300}
              height={300}
              alt="image1"
              className="object-cover"
    
            />
        </div>

        <div>
          <h1 className="text-2xl">
Round Robin (2015) – His 2nd independent album.
    </h1>
        </div>

      </div>


       <div className="flex flex-row justify between p-4">

        <div>
           <Image
              src={album2}
              width={300}
              height={300}
              alt="image1"
              className="object-cover"
    
            />
        </div>

        <div>
          <h1 className="text-2xl">
Wonder Word (EP / Mini-Album, 2014 / 2015) – Eve's debut independent mini-album released under Harapeco Records.
    </h1>
        </div>

      </div>


      

    </div>
  );
}