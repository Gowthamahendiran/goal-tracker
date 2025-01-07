"use client";

import { Card, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { signInWithEmailAndPassword } from "firebase/auth"; // Import the Firebase function
import { auth } from "../../../firebase/config"; // Import your Firebase auth instance (replace with your actual Firebase config file)

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Initialize router for navigation

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
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
          maxWidth: "400px", // Restrict card width to 400px max
          width: "100%", // Make card width responsive
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          margin: "0 10px", // Add small margins to avoid overflow on mobile
          "@media (max-width: 600px)": {
            padding: "15px", // Reduce padding on smaller screens
          },
        }}
      >
        <h1 style={{ fontSize: "22px", color: "black" }}>Welcome</h1>

        <TextField
          sx={{
            width: "100%", // Make text field width responsive
            maxWidth: "350px", // Limit max width to 350px
            marginBottom: "10px", // Add some spacing between fields
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#A020F0",
              },
            },
            "& .MuiInputLabel-root": {
              color: "grey",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#A020F0",
            },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          margin="normal"
        />

        <TextField
          sx={{
            width: "100%", // Make text field width responsive
            maxWidth: "350px", // Limit max width to 350px
            marginBottom: "10px", // Add some spacing between fields
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#A020F0",
              },
            },
            "& .MuiInputLabel-root": {
              color: "grey",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#A020F0",
            },
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          margin="normal"
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
          Login
        </button>
        <br />
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup" style={{ color: "#A020F0" }}>
            Create New, it&apos;s Free!
          </Link>
        </p>
      </Card>
    </div>
  );
}
