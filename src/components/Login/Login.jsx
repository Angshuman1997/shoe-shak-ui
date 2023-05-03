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
  const [values, setValues] = React.useState({
    userId: "",
    password: "",
    showPassword: false,
    forgotEmail: "",
    otp: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
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
        <form onSubmit={handleClickSubmit}>
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
          <LoginBtn type="submit" disabled={disBtn} disBtn={disBtn}>
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <LoginBtnTxt>{loginType.btnTxt}</LoginBtnTxt>
            )}
          </LoginBtn>
        </form>
        <LoginOptions backToLogin={loginType.type !== "login"}>
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
                onClick={() =>
                  setLoginType({ type: "register", headerText: "Register" })
                }
                disabled={loading}
                disBtn={loading}
              >
                Register
              </OptBtn>
            </React.Fragment>
          ) : (
            <OptBtnBack
              onClick={() =>
                setLoginType({
                  type: "login",
                  headerText: "Login",
                  btnTxt: "Login",
                })
              }
              disabled={loading}
              disBtn={loading}
            >
              <ReplyIcon size={20} />
              <OptBtnBackTxt>Back To Login</OptBtnBackTxt>
            </OptBtnBack>
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
  }
  h4 {
    font-size: 0.8rem;
    font-weight: 500;
    color: red;
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
  justify-content: ${(props) => (props.backToLogin ? "end" : "space-between")};
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
