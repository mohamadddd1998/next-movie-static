import List from "@/componets/RowList/List"
import Special from "@/componets/RowList/Special"
import Slider from "@/componets/slider/Slider"
import TagItems from "@/data/TagItems"
import React from "react"

const getTages = async ()=>{
  const response = await TagItems
  return response
}
const Home = async () => {
  const tagItems = await getTages()
  return (
    <>
      <Slider />
      <Special />
      {tagItems &&
        tagItems.map((tagItem, index) => (
          <React.Fragment key={index}>
            <List tagItem={tagItem} />
          </React.Fragment>
        ))}
      <div style={{ marginBottom: "50px" }}></div>
    </>
  )
}
export default Home
