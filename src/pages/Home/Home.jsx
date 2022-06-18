import * as React from "react";
import { useState } from "react";
import "./Home.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Equipment1 from "./../../img/1.jpg";
import Equipment2 from "./../../img/2.jpg";
import Equipment3 from "./../../img/3.png";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Menu from "../../components/Menu/Menu";
const theme = createTheme();

export default function HomeBoston() {
  const [option, setOption] = useState("1");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Menu />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 14,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              <strong>Registro dos Pacientes</strong>
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2} marginTop={5}>
                <Grid item xs={12} sm={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      "& > *": {
                        m: 1,
                      },
                    }}
                  >
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button onClick={() => setOption('1')}>Equipamentos</Button>
                      <Button onClick={() => setOption('2')}>Rastreio</Button>
                    </ButtonGroup>
                  </Box>
                </Grid>
              </Grid>
              {option === "1" ?
              <>
                <Grid container spacing={2} marginTop="5%">
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Grid container spacing={2} marginTop="5%">
                    <Grid item xs={12} md={4}>
                      <img
                        className="brands"
                        src={Equipment1}
                        alt={"equipamento1"}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                        textAlign="justify"
                      >
                        Categoria: Eletrodos
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        textAlign="justify"
                      >
                        ACUITYTM X4
                      </Typography>
                      <Typography variant="body2" textAlign="justify">
                        Os eletrodos LV são ACUITYTM X4 são os
                        primeiros.
                        <br />
                      </Typography>
                      <CardActions>
                        <Button size="small">Saiba mais</Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                  </CardContent>                  
                </Card>
              </Grid>
              <Grid container spacing={2} marginTop="5%">
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Grid container spacing={2} marginTop="5%">
                    <Grid item xs={12} md={4}>
                      <img
                        className="brands"
                        src={Equipment2}
                        alt={"equipamento2"}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                        textAlign="justify"
                      >
                        Categoria: Eletrodos
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        textAlign="justify"
                      >
                        ACUITYTM X4
                      </Typography>
                      <Typography variant="body2" textAlign="justify">
                        Os eletrodos LV são ACUITYTM X4 são os
                        primeiros.
                        <br />
                      </Typography>
                      <CardActions>
                        <Button size="small">Saiba mais</Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                  </CardContent>                  
                </Card>
              </Grid>
              <Grid container spacing={2} marginTop="5%">
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Grid container spacing={2} marginTop="5%">
                    <Grid item xs={12} md={4}>
                      <img
                        className="brands"
                        src={Equipment3}
                        alt={"equipamento3"}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                        textAlign="justify"
                      >
                        Categoria: Eletrodos
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        textAlign="justify"
                      >
                        ACUITYTM X4
                      </Typography>
                      <Typography variant="body2" textAlign="justify">
                        Os eletrodos LV são ACUITYTM X4 são os
                        primeiros.
                        <br />
                      </Typography>
                      <CardActions>
                        <Button size="small">Saiba mais</Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                  </CardContent>                  
                </Card>
              </Grid>
              <Grid container spacing={2} marginTop="5%" marginBottom="8%">
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Grid container spacing={2} marginTop="5%">
                    <Grid item xs={12} md={4}>
                      <img
                        className="brands"
                        src={Equipment1}
                        alt={"equipamento1"}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                        textAlign="justify"
                      >
                        Categoria: Eletrodos
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        textAlign="justify"
                      >
                        ACUITYTM X4
                      </Typography>
                      <Typography variant="body2" textAlign="justify">
                        Os eletrodos LV são ACUITYTM X4 são os
                        primeiros.
                        <br />
                      </Typography>
                      <CardActions>
                        <Button size="small">Saiba mais</Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                  </CardContent>                  
                </Card>
              </Grid>
            </>
            :
            <>
              <Box
                sx={{
                  marginTop: 5,
                  marginBottom: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5" marginBottom="5%">
                  <strong>Selecione o tipo de rastreio</strong>
                </Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Equipamentos</MenuItem>
                      <MenuItem value={20}>Pacientes</MenuItem>
                    </Select>
                  </FormControl>
              </Box>
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="800"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              />
          </>
            }
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
