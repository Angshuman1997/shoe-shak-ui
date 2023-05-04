import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [disBtn, setDisBtn] = useState(true);
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
    rEmailL: "",
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
      rEmailL: "",
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
      rEmailL: "",
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
      if (values.newPassword === values.confirmPassword) {
        setDisBtn(false);
      } else {
        setDisBtn(true);
      }
    } else {
      setDisBtn(true);
    }
  }, [values, loginType, addOTPInput]);

  useEffect(() => {
    if (loading) {
      setDisBtn(true);
    }
  }, [loading]);

  return (
    <Container>
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
                id="outlined-basic"
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
                  id="outlined-adornment-password"
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
                id="outlined-basic"
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
                    id="outlined-basic"
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
                  id="outlined-adornment-password"
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
                  id="outlined-adornment-password"
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
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <LoginBtnTxt>{loginType.btnTxt}</LoginBtnTxt>
              )}
            </LoginBtn>
          )}
        </ButtonSection>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  padding: 1.5rem;
  div.text-transition {
    width: 22rem;
    justify-content: center;
    align-items: center;
  }
`;
const Content = styled.div`
  padding: 0 1rem 1rem 1rem;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 1rem;
    height: 14rem;
  }
  h4 {
    font-size: 0.8rem;
    font-weight: 500;
    color: red;
  }

  .add-scroll {
    overflow: hidden overlay;
    margin-bottom: 2rem;
    height: 12rem;
    scroll-behavior: smooth;
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #ffffff;
    }
  }
`;

const LoginBtn = styled.button`
  padding: 0.7rem 1rem;
  font-size: 1.3rem;
  font-family: sans-serif;
  font-weight: 700;
  color: #ffffff;
  background: #ffa500;
  border: 1px solid #afa2a2;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  -webkit-text-stroke: 0.2px rgb(0, 0, 0);
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disBtn ? "0.6" : "1")};
`;

const LoginBtnTxt = styled.span`
  font-size: 1.3rem;
  font-family: sans-serif;
  font-weight: 700;
  color: #ffffff;
  -webkit-text-stroke: 0.3px #343030;
`;

const LoginOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.adjustRight ? "end" : "space-between")};
  padding: 2rem 0 0 0;
`;
const OptBtn = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
`;

const OptBtnBack = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #cf9b3a;
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
`;

const OptBtnBackTxt = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  font-family: sans-serif;
  margin-top: 0.2rem;
`;

const ReEnterEmail = styled.button`
  border: none;
  background: none;
  color: #dd9817;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 0.2rem;
  font-weight: 600;
  font-family: inherit;
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegFieldInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 4%;
  height: 5rem;
`;

const RegCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
`;

const UploadImage = styled.div`
  padding: 2rem;
`;
