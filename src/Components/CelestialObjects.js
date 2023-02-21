import moment from "moment";
import LocationSearchBar from "./LocationSearchBar";
import ConstellationsSearchBar from "./ConstellationsSearchBar";
import Map from "./Map";
import { useState } from 'react';

function CelestialObjects(props) {
    const [isMapShown,setMapShown] = useState(false);
    const [isLoading,setLoading] = useState(false);
    const [isButtonDisabled,setButtonDisabled] = useState(true);
    const [isMapSelected,setMapSelected] = useState(false);
    const [formData,setFormData] = useState({})
    const toggleMap = () => setMapShown(!isMapShown);
    const [date, setDate] = useState(new Date());

    return (
        <>
            <div id='search-wrapper' className='d-flex'>
                <h2 className='search-heading'>Star Maps</h2>
                <LocationSearchBar />
                <ConstellationsSearchBar
                    toggleMap={toggleMap}
                    isMapShown={isMapShown}
                    date={date}
                    setDate={setDate}
                    setMapSelected={setMapSelected}
                    isButtonDisabled={isButtonDisabled}
                    setButtonDisabled={setButtonDisabled}
                    isLoading={isLoading}
                    setLoading={setLoading}
                    formData={formData}
                    setFormData={setFormData}
                />
            </div>

            {/* <Modal
                isOpen={isModalOpen}
                toggleModal={toggleModal}
                date={moment(date).format("YYYY-MM-DD")}
                constelation={constelation}
            /> */}
            {isMapSelected && 
                <Map
                    isLoading={isLoading}
                    mapSelected={isMapSelected}
                    formData={formData}
                    date={moment(date).format("YYYY-MM-DD")}
                    toggleMap={toggleMap}
                    isMapShown={isMapShown}
                    isButtonDisabled={isButtonDisabled}
                    setButtonDisabled={setButtonDisabled}
                    setLoading={setLoading}
            />}

        </>
    )
}

export default CelestialObjects