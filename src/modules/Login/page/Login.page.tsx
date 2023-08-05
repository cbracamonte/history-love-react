import Button from "@mui/material/Button";
import { Google } from "@mui/icons-material";
import "./Login.css";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../shared/services";
import { useEffect, useState } from "react";

function LoginPage() {
  const [user, setUser] = useState(null) as any;
  /**
   * 0 : Initial
   * 1 : Loading
   * 2 : Login completed
   * 3 : Login unregistered
   * 4 : Without Login
   */
  const [state, setState] = useState(null) as any;

  useEffect(() => {
    setState(1);
    onAuthStateChanged(auth, handleUserStateChanged);
  });

  const handleUserStateChanged = (user: any) => {
    if (user) {
      setState(3);
    } else {
      setState(4);
      console.log("No hay nadie");
    }
  };

  const handleClick = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  };

  async function signInWithGoogle(googleProvider: GoogleAuthProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

  if (state === 1) {
    return <div>Loading...</div>;
  }

  // if (state === 3) {
  //   return (
  //     <Typography variant="h5">
  //       Estas auntenticado pero no registrado
  //     </Typography>
  //   );
  // }

  return (
    <div className="container">
      <Typography variant="h5">Bienvenida a nuestra historia ♥</Typography>
      <div className="login">
        <Button
          startIcon={<Google />}
          variant="contained"
          onClick={handleClick}
        >
          Iniciar sesión con Google
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
