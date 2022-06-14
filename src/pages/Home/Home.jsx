import * as React from "react";
import { useState } from "react";
import "./Home.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-datepicker/dist/react-datepicker.css"
import Logo from './../../img/logo.png';
const theme = createTheme();

export default function Home() {;

  return (
    <>
    <ThemeProvider theme={theme}>      
      <Container component="main" maxWidth="xs">
        <CssBaseline /> 
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} margin="35%">
              <Grid item xs={12}>
                <img
                className="brands"
                src={Logo}
                alt={"logo"}
              />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="outlined" href="cadastro_paciente">Cadastrar paciente</Button>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="outlined" href="pacientes">Registro dos pacientes</Button>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="outlined" href="prontuario_medico">Prontuário médico</Button>
              </Grid>
            </Grid>
          </Box>
      </Container>
    </ThemeProvider>
  </>
  );
}
