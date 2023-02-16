function SearchBar(props) {
    return (
        <>
            <div id='search-wrapper' class='d-flex'>
                <p>Sky Map</p>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name='location'
                    type='text'
                    placeholder='Set your observing location...'
                    id='search-input'
                />
                <div id='results-dropdown' class='d-none'>
                    {/* <table>
                        <tr>Result 1</tr>
                        <tr>Result 2</tr>
                    </table> */}
                </div>
            </div>
        </>
    )
}
  
export default SearchBar;