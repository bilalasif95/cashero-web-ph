import React, { useState } from 'react'
import { styled } from "frontity";
import Modal from "@material-ui/core/Modal";
// import { Theme } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from "../../common/textFiled";
// import SearchIcon from '@material-ui/icons/Search';
// import {
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
// } from "reactstrap";
import { callApi } from '../../config/call-api'
import { EndPoints } from "../../config/config";
// import counrtrylist from "../../config/config/countrylist";
import ThanksModal from "../ThanksModal/ThanksModal";

// const drawerWidth = 240;
// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: "100%",
//         height: "100%",
//         zIndex: 1,
//         overflow: "hidden",
//     },

//     appFrame: {
//         position: "relative",
//         display: "flex",
//         width: "100%",
//         height: "100%",
//     },
//     modal: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     paper: {
//         // backgroundColor: theme.palette.background.paper,
//         // border: "2px solid #000",
//         // boxShadow: theme.shadows[5],
//         // padding: theme.spacing(2, 4, 3),
//         width: "100%",
//         height: "100vh",

//     },
//     menuButton: {
//         // marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
//     appBar: {
//         // zIndex: theme.zIndex.drawer + 1,
//         position: "absolute",
//     },
//     navIconHide: {
//         // [theme.breakpoints.up("md")]: {
//         //     display: "none",
//         // },
//     },
//     drawerHeader: {
//         // ...theme.mixins.toolbar
//     },
//     drawerPaper: {
//         width: 250,
//         // backgroundColor: theme.palette.background.default,
//         // [theme.breakpoints.up("md")]: {
//         //     width: drawerWidth,
//         //     position: "relative",
//         //     height: "100%",
//         // },
//     },
//     closeButton: {
//         position: "absolute",
//         // right: theme.spacing.unit / 2,
//         // top: theme.spacing.unit / 2,
//         // color: theme.palette.grey[500],
//         top: "81px",
//         right: "86px",
//         "& svg": {
//             height: "32px",
//             width: "32px",
//             "& path": {
//                 fill: "#000",
//             },
//         },
//         // [theme.breakpoints.down('sm')]: {
//         //     top: "0px !important",
//         //     right: "0px !important",
//         //     "& svg": {
//         //         height: "32px",
//         //         width: "32px",
//         //         "& path": {
//         //             fill: "#000",
//         //         },
//         //     },
//         // },
//     },
//     content: {
//         // backgroundColor: theme.palette.background.default,
//         width: "100%",
//         height: "100vh",

//         // [theme.breakpoints.up("sm")]: {
//         // 	height: "calc(100% - 64px)",
//         // },
//     },
//     container: {
//         width: "100%",
//         maxWidth: "1140px",
//         margin: "0 auto",
//         background: "#fff",
//         position: "relative",
//         padding: "0px 10px",
//     },
//     CustomHeader: {
//         background: "#fff",
//         color: "#0667EB",
//         boxShadow: "inherit",
//     },
// }));

export default function GetTheAppModal(props) {
    // const classes = useStyles();

    // const [open,setOpen] = useState(false);
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [code, setCode] = useState("+1");
    // const [searchTerm, setSearchTerm] = useState<any>("");
    // const [searchResults, setSearchResults] = useState<any>(counrtrylist);
    // const [searchResults2, setSearchResults2] = useState<any>([]);
    // const [phonenoLength, setPhoneNoLength] = useState(10);
    // const [newPhone, setNewPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    // const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    // const [Error, setError] = useState<string>("");
    const [openSuccessModal, setSuccessModal] = useState(false);

    // useEffect(() => {
    //     setSearchResults(counrtrylist)
    // }, [])
    const thanksModalClose = () => {
        setSuccessModal(false);
    };

    // const handleClose = () =>{
    //     setOpen(false)
    // }

    // const toggle = () => {
    //     setSearchTerm("");
    //     setDropdownOpen((prevState) => !prevState)
    // };

    // const selectCountry = (country) => {
    //     setCode(country.dial_code);
    //     setPhoneNoLength(country.phone_length)
    //     setSearchTerm("")
    //     setSearchResults2(counrtrylist)
    // };

    // const handleChange = (e) => {
    //     setSearchTerm(e.target.value);
    //     const results = searchResults.filter((country) =>
    //         country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    //         country.dial_code.includes(searchTerm.toLocaleLowerCase())
    //     );

    //     setSearchResults2(results)
    // };
    // const handleOnChange = (e: any) => {
    //     setNewPhoneNumber(e.target.value);
    // };

    // const getStarted = () => {

    //     let finalPhoneNumb = code + newPhone;
    //     callApi(EndPoints.preregistration, "post", "", {
    //         Phone: finalPhoneNumb,
    //         // CountryCode: updatecode,
    //     })
    //         .then((res: any) => {
    //             if (res.code === 400) {
    //                 // setError(res.message);
    //             } else {
    //                 setCode("+1")
    //                 setNewPhoneNumber("");
    //                 setSuccessModal(true);
    //             }
    //         })
    //         .catch((error) => {
    //             // setError("Invalid phone number.");
    //         });
    // };
    const onSubmit = () => {
        setLoading(true)
        // setError("");
        // if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
        //     setError("Email is incorrect.");
        //     setLoading(false);
        // }
        // else {
        callApi(EndPoints.preregistration, "post", "", {
            Phone: email,
        })
            .then(() => {
                setSuccessModal(true);
                setLoading(false);
                setEmail("");
            })
        // }
    }
    const { open, handleClose } = props
    return (
        <div className="GetAppModal">
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            // 	timeout: 500,
            // }}
            >

                <Paper>
                    <IconButton
                        aria-label="Close"
                        className="closeButton"
                        onClick={() => handleClose()}
                    >
                        <CloseIcon />
                    </IconButton>
                    <div className="joinApp">
                        <div className="inner-content">
                            <h2
                                className="ModalTitle"
                                id="transition-modal-title"
                            >
                                Your Hero awaits. <span className="br-block"></span> Start saving, earning and sending in seconds.
                    </h2>
                            <p id="transition-modal-description">
                                Enter your number below and we’ll send you a message to download the Cashero app.
                    </p>
                            <div className="ModalPhone">

                                <div className="GetAppEmail">
                                    <TextField
                                        placeholder="Enter Email Address"
                                        autoComplete='off'
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        
                                    />
                                    <div className="GetEarlyBtn">
                                        <button disabled={loading || !email || !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)} onClick={onSubmit} className="btn btn-default">Get Early Access</button>
                                    </div>
                                </div>
                                {/* {error && (
                                    <>
                                        {error.includes("Success") ? (
                                            <div style={{ width: "100%" }}>
                                                <p style={{ color: "green", textAlign: "center" }}>
                                                    {error}
                                                </p>
                                            </div>
                                        ) : (
                                                <div style={{ width: "100%" }}>
                                                    <p className="emailError">
                                                        {error}
                                                    </p>
                                                </div>
                                            )}
                                    </>
                                )} */}
                                {/* Phone-Number */}
                                {/* Phone-Number */}
                                {/* <div className="numberSelection">
                                    <div className="selectCountry">
                                        <Dropdown
                                            isOpen={dropdownOpen}
                                            toggle={toggle}
                                        >
                                            <DropdownToggle caret>
                                                <input
                                                    type="text"
                                                    placeholder="Code"
                                                    value={code}
                                                />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>
                                                    <>
                                                        <SearchIcon />
                                                        <input
                                                            type="text"
                                                            placeholder="Country"
                                                            value={searchTerm}
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </>
                                                </DropdownItem>
                                                <div className="country-list">
                                                    {
                                                        searchResults2.length > 0 ?

                                                            searchResults2.map(
                                                                (item, index) => (
                                                                    <DropdownItem
                                                                        key={index + 1}
                                                                        onClick={() =>
                                                                            selectCountry(
                                                                                item
                                                                            )
                                                                        }
                                                                        className="country-item"
                                                                    >
                                                                        <div className="flag-name">
                                                                            <span>
                                                                                {
                                                                                    item.flag
                                                                                }
                                                                            </span>
                                                                            {item.name}
                                                                        </div>
                                                                        <div className="code">
                                                                            {
                                                                                item.dial_code
                                                                            }
                                                                        </div>
                                                                    </DropdownItem>
                                                                )
                                                            ) : searchResults.map(
                                                                (item, index) => (
                                                                    <DropdownItem
                                                                        key={index + 1}
                                                                        onClick={() =>
                                                                            selectCountry(
                                                                                item
                                                                            )
                                                                        }
                                                                        className="country-item"
                                                                    >
                                                                        <div className="flag-name">
                                                                            <span>
                                                                                {
                                                                                    item.flag
                                                                                }
                                                                            </span>
                                                                            {item.name}
                                                                        </div>
                                                                        <div className="code">
                                                                            {
                                                                                item.dial_code
                                                                            }
                                                                        </div>
                                                                    </DropdownItem>
                                                                )
                                                            )

                                                    }
                                                </div>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="inputNum">
                                        <input
                                            type="number"
                                            placeholder="Phone number"
                                            value={newPhone}
                                            onChange={(e) => handleOnChange(e)}
                                        />

                                    </div>

                                    <button
                                        onClick={() => getStarted()}
                                        className={newPhone.length === phonenoLength
                                            ? "btn btn-primary my-2 my-sm-0 Appbtn d-none d-sm-none d-md-block"
                                            : "btn btn-primary my-2 my-sm-0 Appbtn disabled d-none d-sm-none d-md-block"}
                                        type="submit"
                                    >
                                        Get Early Access
                    </button>
                                </div>


                                <button
                                    onClick={() => getStarted()}
                                    className={newPhone.length === phonenoLength
                                        ? "btn btn-primary my-2 my-sm-0 Appbtn d-md-none d-sm-block JoinCasheroBtn"
                                        : "btn btn-primary my-2 my-sm-0 Appbtn disabled d-md-none d-sm-block JoinCasheroBtn"}
                                    type="submit"
                                >
                                    Get Early Access
                    </button> */}
                                {/* <label style={{ color: "red" }}>
                            {Error}
                        </label> */}
                            </div>

                        </div>
                    </div>
                </Paper>
            </Modal>
            {openSuccessModal && (
                <ThanksModal
                    open={openSuccessModal}
                    handleClose={thanksModalClose}
                />
            )}
        </div>
    )
}

const Paper = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  padding: 16px 32px 24px;
  width: 100% !important;
  height: 100vh !important;
  .MuiButtonBase-root {
    top: 81px;
    right: 86px;
    position: absolute;
   @media(max-width: 540px){
      top: 0px;
      right: 0px;
    },
  }
`;