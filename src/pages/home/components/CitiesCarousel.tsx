export const CitiesCarousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="/src/assets/cities/viaducto.png" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="/src/assets/cities/viaducto.png" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="/src/assets/cities/viaducto.png" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </>
  )
}
