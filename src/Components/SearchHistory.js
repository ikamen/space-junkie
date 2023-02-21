import React from "react";

const styles = {
  searchHistoryItemImg: {},
  searchHistoryItemImg: {
    height: "5rem",
    width: "10rem",
    borderRadius: "5px",
  },
};

export function addToLocalStorage(lat, lon, date, constelation, imageUrl) {
  let searchHistory = new Map();
  const searchHistoryJSON = localStorage.getItem("searchHistory");
  if (searchHistoryJSON) {
    searchHistory = new Map(JSON.parse(searchHistoryJSON));
  }
  if (!searchHistory.has(imageUrl)) {
    searchHistory.set(imageUrl, { lat, lon, constelation, date });
  }

  localStorage.setItem("searchHistory", JSON.stringify([...searchHistory]));
}

function SearchHistoryItem({ constelation, location, imageUrl, date }) {
  return (
    <div className="row fx-jy-cr text-left">
      <img style={styles.searchHistoryItemImg} src={imageUrl} />
      Map of: {constelation} Constelation <br />
      Observing from: {location}.
      <br /> Night: {date}
      <hr />
    </div>
  );
}

const SearchHistory = () => {
  const searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
  const historyItems = [];
  for (const [image, data] of searchHistory) {
    historyItems.push(
      <SearchHistoryItem
        constelation={data.constelation}
        location={[data.lat, data.lon]}
        imageUrl={image}
        date={data.date}
      />
    );
  }
  return (
    <>
      {searchHistory && (
        <div className="search-history-wrapper column ">{historyItems}</div>
      )}
    </>
  );
};

export default SearchHistory;
