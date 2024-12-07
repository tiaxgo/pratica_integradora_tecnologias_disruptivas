import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid, Button, Typography } from '@mui/material';

const Login = () => { 
  const [login, setLogin] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  // Função para lidar com mudanças no input
  const handleChange = (e) => {
    const value = e.target.value;
    setLogin(value);
    
    // Exemplo de validação: o login deve ter pelo menos 5 caracteres
    if (value.length < 5) {
      setError(true);
      setHelperText('O login deve ter pelo menos 5 caracteres.');
    } else {
      setError(false);
      setHelperText('');
    }
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    if (!error && login) {
      // Aqui você pode processar os dados conforme necessário
      // Por exemplo, enviar para um backend usando Fetch ou simplesmente exibir no console
      console.log('Login enviado:', login);

      // Resetar o formulário após a submissão
      setLogin('');
      setHelperText('Login enviado com sucesso!');
    } else {
      setHelperText('Por favor, corrija os erros antes de enviar.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Texto de Boas-Vindas */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Bem-vindo(a)!
          </Typography>
          <Typography variant="subtitle1" align="center">
            Por favor, faça login para continuar.
          </Typography>
        </Grid>

        {/* Campo de Login */}
        <Grid item xs={12}>
          <FormControl fullWidth error={error}>
            <InputLabel htmlFor="login_nome">Digite aqui seu login</InputLabel>
            <Input 
              id="login_nome" 
              aria-describedby="login_nome_helper_text" 
              value={login} 
              onChange={handleChange} 
            />
            <FormHelperText id="login_nome_helper_text">
              {helperText || 'Digite seu login.'}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* Botão de Submissão */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Entrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Login;
