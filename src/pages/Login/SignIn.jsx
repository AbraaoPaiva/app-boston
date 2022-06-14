import * as React from "react";
import { useState } from "react";
import "./SignIn.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LogoBoston from "./../../img/logo-boston.png";

const theme = createTheme();

export default function SignIn() {
  const [forgotPassword, setForgotPassword] = useState(false);

  const showForgotPassword = () => setForgotPassword(true);
  const hideForgotPassword = () => setForgotPassword(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {forgotPassword ? (
          <>
            <Box
              sx={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Recupere sua senha
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <form action="">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Enviar e-mail de recuperação
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link
                        href="#"
                        variant="body2"
                        onClick={hideForgotPassword}
                      >
                        Voltar
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Link href="/register" variant="body2">
                        {"Não tem conta? Registre-se"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >  
              <img
                className="brands"
                src={LogoBoston}
                alt={"logo boston"}
              />
              <Typography component="h1" variant="h6" color="#003C71" marginTop={8}>
                <strong>Sistema hospitalar<br/>Boston</strong>
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <form action="">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    href="/home"
                  >
                    Login
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link
                        href="#"
                        variant="body2"
                        onClick={showForgotPassword}
                      >
                        Esqueceu a senha?
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Link href="/register" variant="body2">
                        {"Suporte"}
                      </Link>
                    </Grid>
                  </Grid>                  
                </form>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}
