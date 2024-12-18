import { showLinks, createGroupsList } from "./uiController.js";
import { handleFormSubmit, setEvents } from './events.js';

showLinks();

const popup = document.getElementById('popup');
const forms = document.getElementById('myForm');
const close = document.getElementsByClassName('close')[0];
const btn = document.getElementById('abrir-popup');
const newGroupBtn = document.getElementById('newGroupBtn'); // Get newGroup button

const selectGrupo = createGroupsList(forms);

forms.addEventListener('submit', handleFormSubmit);

setEvents(popup, forms, close, btn, newGroupBtn); // Pass newGroupBtn to setEvents