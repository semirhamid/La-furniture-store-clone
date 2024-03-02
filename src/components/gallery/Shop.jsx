import React from 'react'
import './shop.scss'


const roomTypes = [
  {
    name: "Bedroom",
    imageSrc: "https://www.lafurniturestore.com/media/catalog/category/1-type-Bedroom-1.jpg",
    link: "https://www.lafurniturestore.com/bedroom.html"
  },
  {
    name: "Office",
    imageSrc: "https://www.lafurniturestore.com/media/catalog/category/2-type-Office-1.jpg",
    link: "https://www.lafurniturestore.com/office.html"
  },
  {
    name: "Dining Room",
    imageSrc: "https://www.lafurniturestore.com/media/catalog/category/3-type-Dining-Room-1.jpg",
    link: "https://www.lafurniturestore.com/dining-room.html"
  },
  {
    name: "Outdoor",
    imageSrc: "https://www.lafurniturestore.com/media/catalog/category/4-type-Outdoor-2.jpg",
    link: "https://www.lafurniturestore.com/patio.html"
  },
  {
    name: "Home Décor",
    imageSrc: "https://www.lafurniturestore.com/media/catalog/category/5-type-Home-Decor-1.jpg",
    link: "https://www.lafurniturestore.com/home-decor.html"
  },
  {
    name: "Accent Furniture",
    imageSrc: "https://www.lafurniturestore.com/media/catalog/category/6-type-Accent-1.jpg",
    link: "https://www.lafurniturestore.com/accents.html"
  },
  {
    name: "All Modern Sofas",
    imageSrc: "https://www.lafurniturestore.com/media/catalog/category/7-type-All-Modern-sofas-1.jpg",
    link: "https://www.lafurniturestore.com/living-room/modern-sofa.html"
  },
  {
    name: "Living room storage",
    imageSrc: "https://www.lafurniturestore.com/media/catalog/category/8-type-Living-room-storage-1.jpg",
    link: "https://www.lafurniturestore.com/living-room/shelves.html"
  }
];

const ShopByRoom = () => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {roomTypes.map((room, index) => (
        <li key={index} className="z-0">
          <div className="">
            <a className="img-container" href={room.link}>
              <img className='w-full hover:shadow-md hover:scale-[1.05] hover:z-50' src={room.imageSrc} alt={room.name} />
            </a>
          </div>
          <a className="top-3 left-3 absolute z-30" href={room.link}>
            <span className="font-bold text-2xl">{room.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}


export default ShopByRoom;