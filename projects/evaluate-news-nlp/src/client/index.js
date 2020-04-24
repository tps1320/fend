import { handleSubmit } from './js/formHandler';
import { isValidText } from './js/validateInput';
import { isValidUrl } from './js/validateInput';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/resets.scss';
import logoImage from './images/logo.jpg';

var logo = document.getElementById('logo');
logo.src = logoImage;

export { handleSubmit, isValidText, isValidUrl };