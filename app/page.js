'use client'
import { BankContextProvider } from './context/stateContext';
import { BankList } from './components/bankList';
import Image from 'next/image';

export default function Home() {

  return (
    <BankContextProvider>
      <main className="flex min-h-screen flex-col items-center justify-center p-12 after:absolute after:-z-20 after:h-[50vh] after:w-[360px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']  after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        <BankList />
      </main>
    </BankContextProvider>
  )
}