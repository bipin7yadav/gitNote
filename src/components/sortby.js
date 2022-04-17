function SortBy() {
    return (
        <>
            <div >
                <div>SortBy</div>
                <hr/>
                <div><button>Clear Filters</button></div>
                <hr />
            </div>
            <div>
                <div>Date</div>
                <div>
                    <input type="radio" name="date" />
                    <label>Latest</label>
                </div>
                <div>
                    <input type="radio" name="date" />
                    <label>Oldest</label>
                </div>
            </div>
        
            <div>
                <div>Filter By Priority</div>
                <hr />
                <div>
                    <input type="radio" name="priority" />
                    <label>Low</label>
                </div>
                <div>
                    <input type="radio" name="priority" />
                    <label>Medium</label>
                </div>
                <div>
                    <input type="radio" name="priority" />
                    <label>High</label>
                </div>
            </div>
        </>
    )
}

export { SortBy }