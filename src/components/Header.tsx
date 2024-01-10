import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = { _id: "aaaa", role: "admin" }

function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const logoutHandler = () => {
        setIsOpen(false)
    }

    return (
        <nav className="header">
            <Link to={"/"} onClick={() => setIsOpen(false)} >Home</Link>
            <Link to={"/search"} onClick={() => setIsOpen(false)} ><FaSearch /></Link>
            <Link to={"/cart"} onClick={() => setIsOpen(false)} ><FaShoppingBag /></Link>

            {
                user?._id ? (
                    // User is logged in
                    <>
                        {/* User icon to open the dialog */}
                        <button onClick={() => setIsOpen((prev) => !prev)}>
                            <FaUser />
                        </button>
                        {/* Dialog with links for admin, orders, and logout */}
                        <dialog open={isOpen}>
                            <div>
                                {user.role === "admin" && (
                                    <Link to="/admin/dashboard" onClick={() => setIsOpen(false)} >Admin</Link>
                                )}
                                <Link to="/orders" onClick={() => setIsOpen(false)} >Orders</Link>
                                <button onClick={logoutHandler}>
                                    <FaSignOutAlt />
                                </button>
                            </div>
                        </dialog>
                    </>
                ) : (
                    // User is not logged in
                    <Link to={"/login"}><FaSignInAlt /></Link>
                )
            }

        </nav>
    )
}

export default Header