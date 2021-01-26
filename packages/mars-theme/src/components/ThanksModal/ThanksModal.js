import React from 'react'
import Modal from "@material-ui/core/Modal";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import SearchIcon from '@material-ui/icons/Search';
// import {
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
// } from "reactstrap";
// import { callApi } from '../../config/call-api'
// import { EndPoints } from "../../config/config/config";
// import counrtrylist from "../../config/config/countrylist";
import Wait2 from "../../assets/wait.svg";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
    },
    appFrame: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        // border: "2px solid #000",
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        width: "100% !important",
        height: "100vh !important",

    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        // zIndex: theme.zIndex.drawer + 1,
        position: "absolute",
    },
    navIconHide: {
        // [theme.breakpoints.up("md")]: {
        //     display: "none",
        // },
    },
    drawerHeader: {
        // ...theme.mixins.toolbar
    },
    drawerPaper: {
        width: 250,
        // backgroundColor: theme.palette.background.default,
        // [theme.breakpoints.up("md")]: {
        //     width: drawerWidth,
        //     position: "relative",
        //     height: "100%",
        // },
    },
    closeButton: {
        position: "absolute",
        // right: theme.spacing.unit / 2,
        // top: theme.spacing.unit / 2,
        // color: theme.palette.grey[500],
        top: "81px",
        right: "86px",
        "& svg": {
            height: "32px",
            width: "32px",
            "& path": {
                fill: "#000",
            },
        },
        // [theme.breakpoints.down('sm')]: {
        //     top: "0px !important",
        //     right: "0px !important",
        //     "& svg": {
        //         height: "32px",
        //         width: "32px",
        //         "& path": {
        //             fill: "#000",
        //         },
        //     },
        // },
    },
    content: {
        // backgroundColor: theme.palette.background.default,
        width: "100%",
        height: "100vh",

        // [theme.breakpoints.up("sm")]: {
        // 	height: "calc(100% - 64px)",
        // },
    },
    container: {
        width: "100%",
        maxWidth: "1140px",
        margin: "0 auto",
        background: "#fff",
        position: "relative",
        padding: "0px 10px",
    },
    CustomHeader: {
        background: "#fff",
        color: "#0667EB",
        boxShadow: "inherit",
    },
}));

export default function ThanksModal(props) {
    const classes = useStyles();

    // const [open,setOpen] = useState(false);
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [code, setCode] = useState("+1");
    // const [searchTerm, setSearchTerm] = useState<any>("");
    // const [searchResults, setSearchResults] = useState<any>(counrtrylist);
    // const [searchResults2, setSearchResults2] = useState<any>([]);
    // const [phonenoLength, setPhoneNoLength] = useState(10);
    // const [newPhone, setNewPhoneNumber] = useState("");
    // const [Error, setError] = useState<string>("");
    // const [openSuccessModal, setSuccessModal] = useState<boolean>(false);

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
    //                 setError(res.message);
    //             } else {
    //                 setCode("+1")
    //                 setNewPhoneNumber("");
    //                 setSuccessModal(true);
    //             }
    //         })
    //         .catch((error) => {
    //             setError("Invalid phone number.");
    //         });
    // };

    const { open, handleClose } = props
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        // 	timeout: 500,
        // }}
        >
            <div className={classes.paper}>
                <IconButton
                    aria-label="Close"
                    className={classes.closeButton}
                    onClick={() => { handleClose() }}
                >
                    <CloseIcon />
                </IconButton>

                <div className="Waitlist">
                    <div className="container">
                        <div className="row waitlistRow">
                            <div className="col-md-6">
                                <div className="waitlistcont">
                                    <h3
                                        className=""
                                        id="transition-modal-title"
                                    >
                                        Thank you for joining{" "}
                                        <span className="br-block"></span>{" "}
                                        Cashero's waitlist{" "}
                                    </h3>
                                    <p>
                                        Cashero's revolutionary approach
												to making{" "}
                                        <span className="br-block"></span>{" "}
												your money go further.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img
                                    className="img-fluid"
                                    alt="wait"
                                    src={Wait2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}