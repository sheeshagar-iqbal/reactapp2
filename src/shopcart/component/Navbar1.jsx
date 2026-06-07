import { Link } from "react-router-dom"

export const Navbar1 = () => {
  return (
    <>
     <nav className=" ">
      <div className="flex justify-between items-center p-4 px-5 bg-gray-900 text-amber-50">
        <Link className="" to="/">🛒 MyShop</Link>
        <div>
          <Link className="px-3 " to="/">Home</Link>
          <Link className="px-3" to="addtocard">Cart (2)</Link>
        </div>
      </div>
    </nav>
    </>
  )
}
