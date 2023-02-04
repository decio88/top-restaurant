// alert('Hello asshole!');
// Standard variable for the div
import { createHero } from './home-page';
import { createNav } from './nav-bar';

const content = document.querySelector('#content');
content.appendChild(createNav());
content.appendChild(createHero());
