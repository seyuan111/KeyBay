import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Cards = () => {
  return (
    <div className="bg-slate-600 max-w-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/30 text-white text-center">
            <p className="font-bold text-2xl px-2 pt-14 mb-4">Replace my Key?</p>
            <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2"><Link href="/Replace">Replace Key</Link></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://flyinglocksmiths.com/wp-content/uploads/locksmith-working.jpeg" alt="/"></img>
    </div>

    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/30 text-white text-center">
            <p className="font-bold text-2xl px-2 pt-14 mb-4">Write a Review</p>
            <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2"><Link href="/Review">Write Review</Link></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://www.shutterstock.com/image-vector/3d-realistic-vector-collection-golden-260nw-1955189575.jpg" alt="/"></img>
    </div>

    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/30 text-white text-center">
            <p className="font-bold text-2xl px-2 pt-14 mb-4">Copy my key</p>
            <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2"><Link href="/Copy">Find a store</Link></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://www.actionlockdoc.com/wp-content/uploads/2021/01/car-locksmith-services.jpg" alt="/"></img>
    </div>
</div>
  )
}

export default Cards