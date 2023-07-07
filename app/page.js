import Hero from '@/components/Hero'
import Image from 'next/image'
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Instagram from '../components/Instagram';

export const metadata = {
  title: 'captur',
  description: 'Photography Next App',
}

export default function Home() {
  return (
    <main className="">
      <Hero  heading='Captur Photography' message='I capture moments in nature and keep them alive.' />
      <Slider slides={SliderData} />
      <Instagram />
    </main>
  )
}
