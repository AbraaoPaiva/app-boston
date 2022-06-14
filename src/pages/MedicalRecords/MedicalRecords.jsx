import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const theme = createTheme();

export default function MedicalRecords() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            <strong>Prontuário médico</strong>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} marginTop={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="namepatient"
                  required
                  fullWidth
                  id="namepatient"
                  label="Nome do paciente"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  id="age"
                  label="Idade do paciente"
                  name="age"
                  autoComplete="age"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  required
                  fullWidth
                  id="date"
                  name="date"
                  autoComplete="date"
                />
              </Grid>
              <Grid item xs={12} sm={6} justifyContent="flex-start" container>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="f" control={<Radio />} label="Feminino" />
                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="o" control={<Radio />} label="Outro" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Belo Horizonte</MenuItem>
                    <MenuItem value={20}>São Paulo</MenuItem>
                    <MenuItem value={30}>Rio de Janeiro</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Bairro</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Barreiro</MenuItem>
                    <MenuItem value={20}>Buritis</MenuItem>
                    <MenuItem value={30}>Regina</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Equipamento Boston utilizado</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>COMETTM ||</MenuItem>
                    <MenuItem value={20}>ACUITYM X4</MenuItem>
                    <MenuItem value={30}>Conjuto Introdutor</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="namedoctor"
                  required
                  fullWidth
                  id="namedoctor"
                  label="Nome do médico"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="clinic"
                  required
                  fullWidth
                  id="clinic"
                  label="Clínica"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  autoComplete="given-name"
                  name="CID"
                  required
                  fullWidth
                  id="CID"
                  label="C.I.D"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="textarea"
                  multiline
                  rows={4}
                  autoComplete="given-name"
                  name="diagnosis"
                  required
                  fullWidth
                  id="diagnosis"
                  label="Diagnóstico clínico"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="textarea"
                  multiline
                  rows={4}
                  autoComplete="given-name"
                  name="procedures"
                  required
                  fullWidth
                  id="procedures"
                  label="Procedimentos tomados"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="textarea"
                  multiline
                  rows={4}
                  autoComplete="given-name"
                  name="comments"
                  required
                  fullWidth
                  id="comments"
                  label="Observações"
                  autoFocus
                />
              </Grid>
              <Grid item xs={4} margin={4}>
                <Button fullWidth variant="outlined" href='/home'>Salvar</Button>
              </Grid>
              <Grid item xs={4} margin={4}>
                <Button fullWidth variant="outlined" href='/home'>Cancelar</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}