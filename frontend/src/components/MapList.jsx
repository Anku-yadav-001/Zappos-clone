

export function MapList({title,arr}){
    
    return <div>
    <h4 className="font-bold mb-2 text-black">{title}</h4>
    <ul>
      {arr.map((item) => (
        <li key={item} className="mb-1">
          <a href="#" className="text-gray-600 hover:text-black">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>

}