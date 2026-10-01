import Link from "next/link";
import eveface from '../../public/Eve_face.webp';

import biogra from '../../public/biogra.jpg'
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
      <h1 className="text-5xl">BIOGRAPHY</h1>



      <main className="flex flex-row justify between p-4">

        <div>
           <Image
              src={eveface}
              width={1000}
              height={1000}
              alt="image1"
              className="object-cover"
    
            />

            <Image
              src={biogra}
              width={1000}
              height={1000}
              alt="image1"
              className="object-cover"
    
            />
        </div>

        <div>
          <h1 className="text-2xl">

            Eve[a] (born 23 May 1995) is a Japanese singer-songwriter and Vocaloid producer. He entered the music industry by singing covers of popular songs on Niconico.

He signed to Toy's Factory in 2019, moving away from his independently owned label, Harapeco Records, of whom Eve had produced under since the release of his debut album, Wonder Word.[2] He was also a guest in "School of Lock!" by Tokyo FM.[3]
    </h1>
        </div>

      </main>


      

    </div>
  );
}