import Image from 'next/image';
import dynamic from 'next/dynamic';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import GlobalStyle from './styles/GlobalStyles';

const DynamicIntro = dynamic(() => import('./components/Intro'), { ssr: false });

export default function Home() {
  return (
    <main>
      {/* <GlobalStyle /> */}
      <NavBar />
      <DynamicIntro />
    </main>
  );
}
