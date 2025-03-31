import './style.css';
// import { setupCounter } from './counter.ts';
import { Saluto } from './model/saluto.ts';

const saluto: Saluto = {
  saluto: 'ciao',
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="prova">
    <span>${saluto.saluto}</span>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
