import './Search.css'

export default function Search({search, setSearch, searchResults}) {


    return (
        <div className="search-container">
            <form className="search-bar">
                <input
                className="search"
                type="text"
                placeholder="Search Articles"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}