import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = async () => {
    if (!name) {
      alert("Please enter name");
      return;
    }
    await registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);

  return (
    <div className="register">
      <Card sx={{ maxWidth: 345 }}>
        <Typography gutterBottom variant="h5" component="div" className="cardTitle">
          TMDB Client
        </Typography>
        <form className="form">
          <TextField
            id="registration-name"
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            variant="standard"
          />
          <br />
          <TextField
            id="registration-email"
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            variant="standard"
          />
          <br />
          <TextField
            id="registration-password"
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            variant="standard"
          />
          <br />
          <Button
            id="register_movie_app_button"
            className="register__btn"
            onClick={register}
            variant="outlined"
          >
            Register
          </Button>
          <br />
          <Button
            className="register__btn register__google"
            onClick={signInWithGoogle}
            variant="outlined"
          >
            Register with Google
          </Button>
          <br />
          {error && <Typography color="error">{error.message}</Typography>}
          <Typography variant="p" color="text.secondary">
            Already have an account? <Link to="/login">Login</Link> now.
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Register;
