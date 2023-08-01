"use client"

import SearchContext from "@/context/SearchContext"
import {
  changeInputStyleStep1,
  changeInputStyleStep2,
  fetchData,
  getData,
} from "@/lib/helper"
import { useContext, useEffect, useState } from "react"
import SearchItem from "./Item/SearchItem"
import { Ping } from "@uiball/loaders"
import SearchPage from "@/data/SearchPage"

const Search = () => {
  const [show, setShow] = useState(true)
  const {
    searchItemsInput,
    setSearchItemsInput,
    activeItemsInput,
    setActiveItemsInput,
    setSearchItems,
    searchItems,
    setLoading,
    loading,
    page,
    setPage,
    setQuerySearch,
  } = useContext(SearchContext)

  useEffect(() => {
    changeInputStyleStep2(
      searchItemsInput,
      activeItemsInput,
      setSearchItemsInput
    )
  }, [activeItemsInput])
  useEffect(() => {
    getData(
      SearchPage,
      setLoading
    ).then((result) => {
        setSearchItems([
          ...searchItems,
          ...result.result_items[0].groups.Media.items,
        ])
    })
  }, [])

  return (
    <>
      <section style={{ marginTop: "100px" }} id="search">
        <div className="season-title">
          <ul className="search-items">
            <li className="search-all">
              <a>همه</a>
              <a>سینمایی</a>
              <a>سریال</a>
            </li>
            {searchItemsInput.map((searchItem, index) => (
              <li key={index}>
                <a>
                  {searchItem.title}
                  <i
                    className={`fa-solid fa-toggle-${
                      searchItem.isActive ? "on" : "off"
                    }`}
                    style={
                      searchItem.isActive
                        ? { color: "rgb(232, 129, 3)" }
                        : { color: "rgb(142, 142, 142)" }
                    }
                    onClick={() =>
                      changeInputStyleStep1(
                        searchItem.id,
                        activeItemsInput,
                        setActiveItemsInput
                      )
                    }
                  ></i>
                </a>
              </li>
            ))}
            <li className="search-input">
              <input
                type="text"
                onChange={(e) => setQuerySearch(e.target.value)}
              />
              <a>
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li className="search-action-btn">
              <button>جست و جو</button>
            </li>
          </ul>
        </div>
        <div></div>
      </section>
      <section>
        {loading && (
          <div className="search__loading">
            <Ping size={100} speed={2} color="#fff" />
          </div>
        )}
      </section>
      <section>
        <div className="search-content">
          <>
            {searchItems.length > 0 &&
              searchItems.map((searchItem, index) => (
                <SearchItem
                  key={index}
                  searchItem={searchItem}
                  loading={loading}
                />
              ))}
          </>
        </div>
      </section>
      {show && (
        <section>
          {searchItems.length > 0 && (
            <div className="more-search-btn">
              <a onClick={() => setPage(page + 1)}>
                <span>بیشتر</span>{" "}
              </a>
            </div>
          )}
        </section>
      )}
    </>
  )
}
export default Search
