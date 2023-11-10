import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD-MqNB6oChKpdbopy7eiUX7IKxmC3MScM",
  authDomain: "jujutsuauth.firebaseapp.com",
  projectId: "jujutsuauth",
  storageBucket: "jujutsuauth.appspot.com",
  messagingSenderId: "797174730216",
  appId: "1:797174730216:web:a8bd219aea542b44a2285d"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
