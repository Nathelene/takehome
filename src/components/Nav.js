import './Nav.css'

export default function Nav({search, setSearch, searchResults}) {


    return (
        <nav className="nav">
            <h1>NEWS</h1>
            <form className="search-bar">
                <input
                className="search"
                type="text"
                placeholder="Search Articles"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
            </form>
        </nav>
    )
}