import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../authentication/firebase';
import styles from './index.module.css';
import logo from './../../images/logo.png'
import background from './../../images/satoru.jpg'
import PasswordField from '../PasswordField';
import EmailField from '../EmailField';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth(app);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert('Usuário Logado com Sucesso');
      console.log('Usuário logado com sucesso:', user);
    } catch (error) {
      alert('Erro ao fazer login');
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <form onSubmit={handleLogin}>
          <EmailField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className={styles.rememberMe}>
            <input type="checkbox" className={styles.rememberCheckbox} />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className={styles.buttonsContainer}>
            <button type="submit">Login</button>
            <button type="button">Create an Account</button>
          </div>
        </form>
      </div>
      <div className={styles.backgroundImage}>
        <img src={background} alt="Background" />
      </div>
    </div>
  );
};

export default LoginScreen;
