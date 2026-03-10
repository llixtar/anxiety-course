import Hero from '@/components/Hero/Hero';
import ForWhom from '@/components/ForWhom/ForWhom';
import Program from '@/components/Program/Program';
import Results from '@/components/Results/Results';
import About from '@/components/About/About';
import Reviews from '@/components/Reviews/Reviews';
import Pricing from '@/components/Pricing/Pricing';
import Footer from '@/components/Footer/Footer';
import StickyTimer from '@/components/StickyTimer/StickyTimer';
// Не забудь імпортувати Header, якщо він у тебе в окремому файлі
import Header from '@/components/Header/Header'; 

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Секція з головним заголовком та кнопкою-магнітом */}
      <Hero />
      
      {/* Секція з архітектурним таймлайном */}
      <ForWhom />
      
      {/* Нова секція з акордеонами-модулями */}
      <Program />

      <Results />

      <About />

      <Reviews />
      <Pricing />
      <Footer />
      
      {/* Кнопка поверх усього сайту */}
      <StickyTimer />
      
      {/* Тут ми скоро додамо відгуки та FAQ */}
    </main>
  );
}