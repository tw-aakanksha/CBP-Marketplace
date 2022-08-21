import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./registermodal.css"

const ModalRegister = ({
    showRegister,
    onModalCloseRegister,
    onModalOkRegister,
}) => {
    return (
        <div className='modalpopup'>
            <Modal show={showRegister} style={{ marginTop: "200px" }}>
                <div className='modaltitle' onClick={onModalCloseRegister}>
                    X
                </div>

                <div
                    style={{
                        color: "Black",
                        fontSize: "40px",
                        height: "80px",
                        textAlign: "center",
                    }}
                >
                    Register as a
                </div>
                <div className='modalbuttons'>
                    <Link
                        className='modalbtns'
                        to='/SignupSeller'
                        onClick={onModalOkRegister}
                    >
                        <Button
                            style={{
                                fontSize: "20px",
                                width: "150px",
                                backgroundColor: "rgba(0,0,0,0.8)",
                            }}
                        >
                            Seller
                        </Button>
                    </Link>
                    <Link
                        className='modalbtns'
                        to='/SignupBuyer'
                        onClick={onModalOkRegister}
                    >
                        <Button
                            style={{
                                fontSize: "20px",
                                width: "150px",
                                backgroundColor: "rgba(0,0,0,0.8)",
                            }}
                        >
                            Buyer
                        </Button>
                    </Link>
                </div>
            </Modal>
        </div>
    )
}

export default ModalRegister
