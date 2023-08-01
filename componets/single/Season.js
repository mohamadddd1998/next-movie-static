"use client"
import { useContext, useEffect, useState } from "react"
import SeasonItem from "../Item/SeasonItem"
import { getData } from "@/lib/helper"
import { Ping } from "@uiball/loaders"
import SeasonContext from "@/context/SeasonContext"
import SeasonEpisodes from "@/data/SeasonEpisodes"

const Season = ({ seasons }) => {
  const [seasonItems, setSeasonItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { seasonId, setSeasonId } = useContext(SeasonContext)
  useEffect(() => {
    if (seasonId.id != null && seasonId.req == true) {
      getData(SeasonEpisodes,setLoading).then((result) => {
        setSeasonItems(result)
      })
    }
  }, [seasonId])
  useEffect(() => {
    getData(SeasonEpisodes,setLoading).then((result) => {
      setSeasonId({ ...seasonId, id: seasons[0].seasonId })
      setSeasonItems(result)
    })
  }, [seasons])
  return (
    <section style={{ marginTop: "25px" }}>
      {loading ? (
        <div className="season__loading">
          <Ping size={90} speed={2} color="#fff" />
        </div>
      ) : (
        <div className="container special">
          {seasonItems.length > 0 &&
            seasonItems.map((seasonItem, index) => (
              <SeasonItem key={index} season={seasonItem} />
            ))}
        </div>
      )}
    </section>
  )
}
export default Season
