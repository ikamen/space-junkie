import Select from "react-select";

function LocationSearchBar(props) {

    const locations = [];

    return (
        <>
            <Select options={locations} onChange='' placeholder='Choose a location' id='location-searchbar'/>
            
            <button className="btn btn-light"> Show map</button>
        </>
    )
}
  
export default LocationSearchBar;