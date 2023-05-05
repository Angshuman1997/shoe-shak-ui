import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";
import ReactTextTransition from "react-text-transition";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import {Container, CloseSection, CloseBtn, Header, Content, UploadImage, RegCont,
  RegFieldInputs, ButtonSection, LoginBtn, LoginBtnTxt, AlertSection,
  LoginOptions, OptBtn, ReEnterEmail, OptBtnBack, OptBtnBackTxt} from "./LoginStyled";
import { useDispatch } from "react-redux";
import {notificationFunc} from "../../redux/actions/actions"

export default function Login({ handleOnClickClose }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [disBtn, setDisBtn] = useState(true);
  const [errTxtMsg, setErrTxtMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [addOTPInput, setAddOTPInput] = useState(false);
  const [loginType, setLoginType] = useState({
    type: "login",
    headerText: "Login",
    btnTxt: "Login",
  });
  const [values, setValues] = useState({
    userId: "",
    password: "",
    showPassword: false,
    newShowPassword: false,
    registerShowPassword: false,
    newPassword: "",
    confirmPassword: "",
    confirmShowPassword: false,
    forgotEmail: "",
    otp: "",
    rName: "",
    rEmail: "",
    rUserId: "",
    rPhone: "",
    registerPassword: "",
    rAddress: "",
  });

  const step1 = React.useRef(null); // Name
  const step2 = React.useRef(null); // Email
  const step3 = React.useRef(null); // User Id
  const step4 = React.useRef(null); // Phone
  const step5 = React.useRef(null); // Password
  const step6 = React.useRef(null); // Delivery Address

  const scrollToStep1 = () => step1.current.scrollIntoView();
  const scrollToStep2 = () => step2.current.scrollIntoView();
  const scrollToStep3 = () => step3.current.scrollIntoView();
  const scrollToStep4 = () => step4.current.scrollIntoView();
  const scrollToStep5 = () => step5.current.scrollIntoView();
  const scrollToStep6 = () => step6.current.scrollIntoView();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickNewShowPassword = () => {
    setValues({
      ...values,
      newShowPassword: !values.newShowPassword,
    });
  };

  const handleClickConfirmShowPassword = () => {
    setValues({
      ...values,
      confirmShowPassword: !values.confirmShowPassword,
    });
  };

  const handleClickRegisterShowPassword = () => {
    setValues({
      ...values,
      registerPassword: !values.registerPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickForgot = () => {
    setLoginType({
      type: "forgot",
      headerText: "Forgot Password",
      btnTxt: "Submit",
    });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (loginType.type === "login") {
      dispatch(notificationFunc({open: true, status: "success", message: "Success"}));
      setLoading(true);
    } else if (loginType.type === "forgot") {
      if (loginType.btnTxt === "Verify") {
        setAddOTPInput(false);
        setLoginType({
          type: "reset",
          headerText: "Reset Password",
          btnTxt: "Update Password",
        });
      } else {
        setAddOTPInput(true);
        setLoginType({
          type: "forgot",
          headerText: "Forgot Password",
          btnTxt: "Verify",
        });
      }
    } else if (loginType.type === "reset") {
      handleOnClickBackLogin();
    }
  };

  const handleOnClickBackLogin = () => {
    setAddOTPInput(false);
    setLoginType({
      type: "login",
      headerText: "Login",
      btnTxt: "Login",
    });
    setValues({
      userId: "",
      password: "",
      showPassword: false,
      newShowPassword: false,
      registerShowPassword: false,
      newPassword: "",
      confirmPassword: "",
      confirmShowPassword: false,
      forgotEmail: "",
      otp: "",
      rName: "",
      rEmail: "",
      rUserId: "",
      rPhone: "",
      registerPassword: "",
      rAddress: "",
    });
  };

  const handleReEnterEmail = () => {
    setValues({
      userId: "",
      password: "",
      showPassword: false,
      newShowPassword: false,
      registerShowPassword: false,
      newPassword: "",
      confirmPassword: "",
      confirmShowPassword: false,
      forgotEmail: "",
      otp: "",
      rName: "",
      rEmail: "",
      rUserId: "",
      rPhone: "",
      registerPassword: "",
      rAddress: "",
    });
    setAddOTPInput(false);
    setLoginType({
      type: "forgot",
      headerText: "Forgot Password",
      btnTxt: "Submit",
    });
  };

  const handleClickRegister = () => {
    setLoginType({
      type: "register",
      headerText: "Register",
      btnTxt: "Submit",
    });
  };

  const checkInputFields = () => {
    let errText = [];

    // Name
    if (values.rName === "") {
      errText.push("Name");
    } else {
      errText.filter((val) => val !== "Name");
    }

    // Email
    if (values.rEmail === "") {
      errText.push("Email");
    } else {
      errText.filter((val) => val !== "Email");
    }

    // User Id
    if (values.rUserId === "") {
      errText.push("User Id");
    } else {
      errText.filter((val) => val !== "User Id");
    }

    // Phone
    if (values.rPhone === "") {
      errText.push("Phone");
    } else {
      errText.filter((val) => val !== "Phone");
    }

    // Password
    if (values.registerPassword === "") {
      errText.push("Password");
    } else {
      errText.filter((val) => val !== "Password");
    }

    // Address
    if (values.rAddress === "") {
      errText.push("Address");
    } else {
      errText.filter((val) => val !== "Address");
    }

    if (errText.length === 0) {
      setErrTxtMsg("");
      setDisBtn(false);
    } else {
      setErrTxtMsg(
        errText.length === 1
          ? `* Please add ${errText[0]}`
          : errText.length === 2
          ? `* Please add ${errText.join(" and ")}`
          : `* Please add ${errText
              .slice(0, errText.length - 1)
              .join(" ,")} and ${errText[errText.length - 1]}`
      );
      setDisBtn(true);
    }
  };

  useEffect(() => {
    if (loginType.type === "login") {
      if (values.userId !== "" && values.password !== "") {
        setDisBtn(false);
      } else {
        setDisBtn(true);
      }
    } else if (loginType.type === "forgot") {
      if (values.forgotEmail !== "" && !addOTPInput) {
        setDisBtn(false);
      } else if (values.forgotEmail !== "" && addOTPInput) {
        setDisBtn(values.otp !== "" ? false : true);
      } else {
        setDisBtn(true);
      }
    } else if (loginType.type === "reset") {
      if (values.newPassword === values.confirmPassword && values.newPassword !== "") {
        setDisBtn(false);
      } else {
        setDisBtn(true);
      }
    } else if (loginType.type === "register") {
      checkInputFields();
    } else {
      setDisBtn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, loginType, addOTPInput]);

  useEffect(() => {
    if (loading) {
      setDisBtn(true);
    }
  }, [loading]);

  return (
    <Container>
      <CloseSection>
        <CloseBtn
          onClick={handleOnClickClose}
          disabled={loading}
          disBtn={loading}
        >
          <CloseIcon />
        </CloseBtn>
      </CloseSection>
      <Header>
        <h1>
          <ReactTextTransition>{loginType.headerText}</ReactTextTransition>
        </h1>
      </Header>
      <Content>
        <form
          className={`${loginType.type === "register" ? "add-scroll" : ""}`}
        >
          {loginType.type === "login" && (
            <React.Fragment>
              <TextField
                disabled={loading}
                id="userId"
                label="User Id"
                variant="outlined"
                value={values.userId}
                onChange={handleChange("userId")}
                sx={{
                  width: "100%",
                }}
              />
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  disabled={loading}
                  id="password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </React.Fragment>
          )}
          {loginType.type === "forgot" && (
            <React.Fragment>
              <TextField
                disabled={loading}
                id="emailId"
                label="Email Id"
                variant="outlined"
                value={values.forgotEmail}
                onChange={handleChange("forgotEmail")}
                sx={{
                  width: "100%",
                }}
              />
              <h4>* Enter registered email id for OTP</h4>
              {addOTPInput && (
                <React.Fragment>
                  <TextField
                    disabled={loading}
                    id="otp"
                    label="OTP"
                    variant="outlined"
                    value={values.otp}
                    onChange={handleChange("otp")}
                    sx={{
                      width: "100%",
                    }}
                  />
                  <h4>* Enter the OTP sent on your email</h4>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
          {loginType.type === "reset" && (
            <React.Fragment>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  New Password
                </InputLabel>
                <OutlinedInput
                  disabled={loading}
                  id="new-password"
                  type={values.newShowPassword ? "text" : "password"}
                  value={values.newPassword}
                  onChange={handleChange("newPassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickNewShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.newShowPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New Password"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  disabled={loading}
                  id="confirm-password"
                  type={values.confirmShowPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickConfirmShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.confirmShowPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
            </React.Fragment>
          )}
          {loginType.type === "passUpComplete" && (
            <h4>* Your new password has been updated</h4>
          )}
          {loginType.type === "register" && (
            <React.Fragment>
              <UploadImage>Upload Image Section</UploadImage>
              <RegCont>
                <RegFieldInputs ref={step1}>
                  <TextField
                    disabled={loading}
                    id="register-name"
                    label="Name"
                    variant="outlined"
                    value={values.rName}
                    onChange={handleChange("rName")}
                    onFocus={scrollToStep1}
                    sx={{
                      width: "100%",
                    }}
                  />
                </RegFieldInputs>
                <RegFieldInputs ref={step2}>
                  <TextField
                    disabled={loading}
                    id="register-email"
                    label="Email"
                    variant="outlined"
                    value={values.rEmail}
                    onChange={handleChange("rEmail")}
                    onFocus={scrollToStep2}
                    sx={{
                      width: "100%",
                    }}
                  />
                </RegFieldInputs>
                <RegFieldInputs ref={step3}>
                  <TextField
                    disabled={loading}
                    id="register-userid"
                    label="User ID"
                    variant="outlined"
                    value={values.rUserId}
                    onChange={handleChange("rUserId")}
                    onFocus={scrollToStep3}
                    sx={{
                      width: "100%",
                    }}
                  />
                </RegFieldInputs>
                <RegFieldInputs ref={step4}>
                  <TextField
                    disabled={loading}
                    id="register-phone"
                    label="Phone"
                    variant="outlined"
                    value={values.rPhone}
                    onChange={handleChange("rPhone")}
                    onFocus={scrollToStep4}
                    sx={{
                      width: "100%",
                    }}
                  />
                </RegFieldInputs>
                <RegFieldInputs ref={step5}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      disabled={loading}
                      id="register-password"
                      type={values.registerShowPassword ? "text" : "password"}
                      value={values.registerPassword}
                      onChange={handleChange("registerPassword")}
                      onFocus={scrollToStep5}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickRegisterShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.registerShowPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </RegFieldInputs>
                <RegFieldInputs ref={step6}>
                  <TextField
                    disabled={loading}
                    id="register-address"
                    label="Delivery Address"
                    variant="outlined"
                    value={values.rAddress}
                    onChange={handleChange("rAddress")}
                    onFocus={scrollToStep6}
                    sx={{
                      width: "100%",
                    }}
                  />
                </RegFieldInputs>
              </RegCont>
            </React.Fragment>
          )}
        </form>
        <ButtonSection>
          {loginType.btnTxt !== "" && (
            <LoginBtn
              onClick={handleClickSubmit}
              disabled={disBtn}
              disBtn={disBtn}
              onTouchEnd={() => {
                if(loginType.type === "register") {
                  setShowAlert(true); 
                }
              }
              }
              onMouseOver={() =>
                loginType.type === "register" ? setShowAlert(true) : {}
              }
              onMouseOut={() =>
                loginType.type === "register" ? setShowAlert(false) : {}
              }
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <LoginBtnTxt>{loginType.btnTxt}</LoginBtnTxt>
              )}
            </LoginBtn>
          )}
        </ButtonSection>
        <AlertSection display={showAlert ? "block" : "none"}>
          <h5>{errTxtMsg}</h5>
        </AlertSection>
        <LoginOptions
          adjustRight={
            loginType.type === "forgot" ? false : loginType.type !== "login"
          }
        >
          {loginType.type === "login" ? (
            <React.Fragment>
              <OptBtn
                onClick={handleClickForgot}
                disabled={loading}
                disBtn={loading}
              >
                Forgot Password ?
              </OptBtn>
              <OptBtn
                onClick={handleClickRegister}
                disabled={loading}
                disBtn={loading}
              >
                Register
              </OptBtn>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {loginType.type === "forgot" && (
                <ReEnterEmail
                  disabled={loading}
                  disBtn={loading}
                  onClick={handleReEnterEmail}
                >
                  Re-Enter Email
                </ReEnterEmail>
              )}
              <OptBtnBack
                onClick={handleOnClickBackLogin}
                disabled={loading}
                disBtn={loading}
              >
                <ReplyIcon size={20} />
                <OptBtnBackTxt>Back To Login</OptBtnBackTxt>
              </OptBtnBack>
            </React.Fragment>
          )}
        </LoginOptions>
      </Content>
    </Container>
  );
}
