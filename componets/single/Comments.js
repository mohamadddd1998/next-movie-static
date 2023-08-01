"use client"
import { fetchData, getData } from "@/lib/helper"
import CommentsItem from "../Item/CommentsItem"
import { useEffect, useState } from "react"
import { Ping } from "@uiball/loaders"
import CommentsSingle from "@/data/CommentsSingle"

const Comments = ({ item }) => {
  const [comments, setComments] = useState([])
  const [pi, setPi] = useState(1)
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(true)
  useEffect(() => {
   
    getData(CommentsSingle,setLoading).then((result) => {
      setComments([...comments, ...result])
      if (result.length < 5) {
        setShow(false)
      }
    })
  }, [])
  return (
    <div className="comments">
      {comments.length > 0 &&
        comments.map((comment, index) => (
          <CommentsItem comment={comment} key={index} />
        ))}
      {show && (
        <nav className="comment-paginate">
          {loading ? (
            <Ping size={25} speed={2} color="#fff" />
          ) : (
            <a onClick={() => setPi(pi + 1)}>
              <span>بیشتر</span>{" "}
            </a>
          )}
        </nav>
      )}
    </div>
  )
}
export default Comments
