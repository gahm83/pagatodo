'use client'
import React, { useContext } from 'react';
import { BankContext } from '../context/stateContext';

export const BankList = ({ children }) => {

  const { banks, loading, error } = useContext(BankContext);

  const evenClassName = 'md:col-start-5 lg:col-start-auto';
  const oddClassName = 'md:col-start-1';

  const bankItemList = banks?.length && banks.map((bank, idx) =>
    <article className={`grid grid-cols-3 gap-6 items-center md:col-span-7 lg:col-span-1 ${idx % 2 !== 0 ? evenClassName : oddClassName}`}>
      <div className="col-span-1">
        <figure className='relative rounded-full aspect-square overflow-hidden w-full'>
          <img src={bank.url} className="img-fluid object-cover w-full h-full absolute" alt=""/>
        </figure>
      </div>
      <div className="col-span-2 ">
        <h2 className='text-xl font-bold'>{bank.bankName}</h2>
        <p className='font-light'>{bank.description}</p>
      </div>
    </article>
  );

  return (
    <section className='grid gap-6 md:grid-cols-12 md:gap-8 lg:grid-cols-3'>
      {bankItemList}
    </section>
  );
};
