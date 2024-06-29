"use client"
import Image from 'next/image'
import SwaggerUI from "swagger-ui-react"

export default function Home() {
  return (
    <main>
      <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
    </main>
  )
}
