import { useState } from "react"
import ProductCard from "../components/ProductCard";

function Search() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler=()=>{}
  const isPrevPage=page > 1;
  const isNextPage=page < 4;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h2>Sort</h2>
          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input type="range" min={100} max={100000} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="">Camera</option>
            <option value="">Laptop</option>
            <option value="">Game</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" placeholder="Search by name" value={search} onChange={e=>setSearch(e.target.value)}/>
        <div className="search-product-list">
          <ProductCard
          productId="abvd" 
          name="Macbook" 
          price={30000} 
          stock={2} 
          photo="https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" 
          handler={addToCartHandler}/>
        </div>
        <article>
          <button disabled={!isPrevPage} onClick={()=>setPage((prev)=>prev-1)}>prev</button>
          <span>{page} of {4}</span>
          <button disabled={!isNextPage} onClick={()=>setPage((prev)=>prev+1)}>next</button>
        </article>
      </main>
    </div>
  )
}

export default Search