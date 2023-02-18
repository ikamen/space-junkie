import Select from "react-select";

function LocationSearchBar(props) {

    const locations = [];

    const customStyles = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected ? "#fff" : "#fff",
          backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          backgroundColor: 'rgba(33,37,41,0.8)',
          color: '#fff',
          border: "none",
          boxShadow: "none",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
      };

    return (
        <>
            <Select className="search-element" styles={customStyles} options={locations} onChange='' placeholder='Choose a location' id='location-searchbar'/>
            
            {/* <button className="btn btn-dark"> Show map</button> */}
        </>
    )
}
  
export default LocationSearchBar;