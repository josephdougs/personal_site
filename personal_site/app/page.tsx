import Image from 'next/image'
import JoeyDrop from './mainApp'
import HomePage from '../pages/home/index.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePage />
    </main>
  )
}
