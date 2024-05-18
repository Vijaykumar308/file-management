function SearchInput() {
  return (
    <div>
        <div className="ml-4">
            <input className="p-2 rounded bg-grey-darkest text-grey-light text-xs w-128"
                type="text"
                name="q"
                placeholder="Search Github"
            />
        </div>
    </div>
  )
}

export default SearchInput;
