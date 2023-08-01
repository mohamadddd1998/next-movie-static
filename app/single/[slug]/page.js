import Actors from "@/componets/single/Actors"
import End from "@/componets/single/End"
import Season from "@/componets/single/Season"
import Single from "@/componets/single/Single"
import Title from "@/componets/single/Title"
import SingleBanner from "@/data/SingleBanner"
import { getActors} from "@/lib/helper"

const getData = async () => {
  const response = await SingleBanner
  return response.result
}

const SinglePage = async () => {
  const singleMedia = await getData()
  return (
    <>
      <Single item={singleMedia} toggle={false} />
      {singleMedia.seasons.length > 0 && (
        <>
          <Title seasons={singleMedia.seasons} />{" "}
          <Season seasons={singleMedia.seasons} />
        </>
      )}
      {getActors(singleMedia.casts).length > 0 && (
        <Actors actors={getActors(singleMedia.casts)} />
      )}
      <End item={singleMedia} />
      <div style={{ marginBottom: "50px" }}></div>
    </>
  )
}
export default SinglePage
