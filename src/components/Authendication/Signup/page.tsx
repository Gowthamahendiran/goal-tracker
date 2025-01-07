import { auth, db } from "../../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Card, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Auth:", auth, db);

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: new Date().toISOString(),
      });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error signing up:", error.message);
        alert(error.message);
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: "0",
      }}
    >
      <Card
        sx={{
          padding: "20px",
          maxWidth: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          margin: "0 10px",
          "@media (max-width: 600px)": {
            padding: "15px",
          },
        }}
      >
        <h1 style={{ fontSize: "21px", color: "black" }}>
          Create your account
        </h1>

        {/* Name Input */}
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Full Name"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        {/* Email Input */}
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        {/* Password Input */}
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Confirm Password Input */}
        <TextField
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#A020F0",
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        <br />
        <p>
          Already have an account?{" "}
          <Link href="/" style={{ color: "#A020F0" }}>
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}
