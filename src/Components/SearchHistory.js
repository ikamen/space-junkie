import React from "react";

const styles = {
  searchHistoryItemImg: {},
  searchHistoryItemImg: {
    height: "5rem",
    width: "10rem",
    borderRadius: "5px",
  },
};

export function AddToLocalStorage({ constelation, location, imageUrl, date }) {
  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  searchHistory.push({ constelation, location, imageUrl, date });
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

const SearchHistory = () => {
  const img =
    "https://widgets.astronomyapi.com/star-chart/generated/15b6fb6e017ca70cfb2ae62e7b4853adc881216f1a48c1033c3a8d1a07c7c5d3.png";

  const searchHistory = JSON.parse(localStorage.getItem("searchHistory"));

  return (
    <>
      <div className="search-history-wrapper column ">
        <SearchHistoryItem
          constelation={"orion"}
          location={"London"}
          imageUrl={img}
          date={"14th Feb 2023"}
        />
      </div>
    </>
  );
};

function SearchHistoryItem({ constelation, location, imageUrl, date }) {
  return (
    <div className="row fx-jy-cr text-left">
      <img style={styles.searchHistoryItemImg} src={imageUrl} />
      Map of {constelation} Constelation visible from {location}.
      <br /> Night: {date}
      <hr />
    </div>
  );
}

export default SearchHistory;
