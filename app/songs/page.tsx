import Link from "next/link";
import song1 from '../../public/song1.jpg';
import song2 from '../../public/song2.jpg';
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
      <h1 className="text-5xl">SONGS</h1>



      <div className="flex flex-row justify between p-4">

        <div>
           <Image
              src={song1}
              width={200}
              height={200}
              alt="image1"
              className="object-cover"
    
            />
        </div>

        <div>
          <h1 className="text-2xl">
"Dramaturgy" (ドラマツルギー) is a hit J-pop and Vocaloid song by Japanese singer-songwriter Eve featuring Hatsune Miku, released in October 2017. 
    </h1>
        </div>

      </div>
  <div className="flex flex-row justify between p-4">

        <div>
           <Image
              src={song2}
              width={200}
              height={200}
              alt="image1"
              className="object-cover"
    
            />
        </div>

        <div>
          <h1 className="text-2xl">
         AI Overview
        "How to Eat Life" (Inochi no Tabekata) is a popular song, light novel, and manga by the Japanese artist Eve that metaphorically explores anxiety, inner pain, and self-destruction.
    </h1>
        </div>

      </div>

      

    </div>
  );
}