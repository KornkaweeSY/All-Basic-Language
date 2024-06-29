import React from 'react'
import axios from 'axios'
import { DomainName } from '@/lib/config'

export default async function page() {
    const dose = await axios.get(`${DomainName}/api`)
  return (
    <div><h1>{dose.data.message}</h1></div>
  )
}
