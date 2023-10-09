import printMessage from './message';
import './scss/main.scss';
import webpackImage from './assets/webpack.png';

const webpackImageEl = document.getElementById('webpackImg');
webpackImageEl.src = webpackImage;

printMessage();
