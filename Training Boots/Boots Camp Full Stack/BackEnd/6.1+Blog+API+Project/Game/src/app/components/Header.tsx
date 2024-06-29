"use client"
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex w-[100vw] h-[60px] justify-center items-center'>
        <Link className='mr-4' href='/'>ONE</Link>
        <Link href='/two'>TWO</Link>
    </div>
  )
}
