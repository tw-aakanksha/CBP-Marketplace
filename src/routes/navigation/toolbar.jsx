import { useState } from "react"
import { Outlet } from "react-router-dom"
import "./toolbar.css"
import ModalRegister from "./registermodal"
import ModalLogin from "./Loginmodal"
import { Link } from "react-router-dom"
import { UserContext } from "../../App"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectUser } from "../../reducers/userSlice"
import { useNavigate } from "react-router-dom"

import LOGO from "..//..//assets/logo2.png"

import "bootstrap/dist/css/bootstrap.css"
import { Container, Dropdown } from "react-bootstrap"
import SearchBar from "./searchbar"

const Toolbar = () => {
    const userLogInfo = useContext(UserContext)

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const [showRegister, setShowRegister] = useState(false)

    const onModalCloseRegister = () => {
        console.log("OnModalClose")
        setShowRegister(false)
    }

    const onModalOkRegister = () => {
        console.log("OnModalOK")
        setShowRegister(false)
    }
    const handleShowRegister = () => setShowRegister(true)

    const [showLogin, setShowLogin] = useState(false)

    const onModalCloseLogin = () => {
        console.log("OnModalClose")
        setShowLogin(false)
    }

    const onModalOkLogin = () => {
        setShowLogin(false)
    }
    const handleShowLogin = () => setShowLogin(true)

    const signoutHandler = () => {
        userLogInfo.setIsLoggedIn(false)

        dispatch(logout())
    }

    const navigate = useNavigate()
    const [search, setSearch] = useState("")

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            console.log("enter press here! working ")
            navigate("/filterdata", { state: { search } })
        }
    }

    return (
        <div className='toolbar-container'>
            <section className='sec'>
                <div className='nav-bar'>
                    <div className='Logo'>
                        <img
                            src={LOGO}
                            alt='logo'
                            style={{
                                width: "80px",
                                height: "80px",
                                padding: "10px",
                            }}
                        />
                    </div>

                    <SearchBar />

                    <div className='nav-buttons'>
                        {/* <div className="navright"> */}
                        <div className='btnheader'>
                            <Link className='btnheader' to='/'>
                                Home
                            </Link>
                        </div>

                        <div className='btnheader'>About</div>
                        {/* </div> */}
                        {!userLogInfo.isLoggedIn ? (
                            <>
                                <div
                                    className='btnheader'
                                    onClick={handleShowRegister}
                                >
                                    Register
                                </div>
                                <div
                                    className='btnheader'
                                    onClick={handleShowLogin}
                                >
                                    Login
                                </div>
                            </>
                        ) : (
                            <>
                                {
                                    <div>
                                        <Container className='p-9'>
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    variant='Secondary'
                                                    className='btnheader'
                                                >
                                                    <i
                                                        className='fa fa-user'
                                                        aria-hidden='true'
                                                        style={{
                                                            fontSize: "30px",
                                                        }}
                                                    ></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item className='profile'>
                                                        {user.email}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className='profile'>
                                                        My Profile
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link
                                                            to='/'
                                                            className='profile'
                                                            onClick={
                                                                signoutHandler
                                                            }
                                                        >
                                                            Logout
                                                        </Link>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Container>
                                    </div>
                                }
                            </>
                        )}
                    </div>
                </div>

                <ModalRegister
                    showRegister={showRegister}
                    onModalCloseRegister={onModalCloseRegister}
                    onModalOkRegister={onModalOkRegister}
                />

                <ModalLogin
                    showLogin={showLogin}
                    onModalCloseLogin={onModalCloseLogin}
                    onModalOkLogin={onModalOkLogin}
                />
            </section>

            <Outlet />
        </div>
    )
}

export default Toolbar
