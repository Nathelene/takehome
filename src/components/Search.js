import './Search.css'


export default function Search({search, setSearch, searchResults}) {

const date = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};


    return (
        <div className="search-container">
            <p className= 'todays-date'>{date.toLocaleString('en-US', options)}</p>
            <form className="search-bar">
                <input
                className="search"
                type="text"
                placeholder="Search Articles"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
            </form>
            {!searchResults.length && <p className="no-results">No Results</p>}
        </div>
    )
}