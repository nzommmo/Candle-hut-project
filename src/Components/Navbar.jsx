
const Navbar = () => {
  return (

<nav className="sticky top-0 z-50 backdrop-blur-lg  border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">Candle Hut</span>
            
        </div>
        <ul className="hidden lg:flex ml-14 space-x-12">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
    </div>
    <div className="bg-blue-500 border-b border-neutral-700/80" >
        
    </div>
</nav>

)
}

export default Navbar