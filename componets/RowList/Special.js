"use client"
import { useEffect, useState } from "react"
import SpecialItwm from "../Item/SpecialItem"
import {getData } from "@/lib/helper"
import Banner from '@/data/Banner'
const Special = () => {
  const [specials, setSpecials] = useState([])
  useEffect(() => {
   
    getData(Banner,()=>{}).then((result) => {
      setSpecials(result.slice(0, 6))
    })
  }, [])
  return (
    <section>
      <div className="container special">
        {specials.length > 0 &&
          specials.map((special, index) => (
            <SpecialItwm key={index} special={special} />
          ))}
      </div>
    </section>
  )
}
export default Special
