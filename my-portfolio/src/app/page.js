import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <h1 className="text-xl items-center justify-between font-mono ">Sukrit Dev Dhawan</h1>
        <ul className="flex items-centre">
          <li>
            <BsFillMoonStarsFill className=""cursor-pointer text-2xl></BsFillMoonStarsFill>
          </li>
          <li>
            <a href="../public/Dhawan-Sukrit-Resume.pdf" download="Dhawan-Sukrit-Resume.pdf">Resume11</a>
          </li>
        </ul>
      </nav>
        
      
    </main>
  );
}
