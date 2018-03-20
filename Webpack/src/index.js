import { Clock } from './clock'; // statique

const clock = new Clock(document.body);
clock.start();


document.addEventListener('click', async () => {
  const { getRandomCssColor } = await import('./colors'); // dynamique et async
  document.body.style.backgroundColor = getRandomCssColor();
});

/*
document.addEventListener('click', () => {
  import('./colors').then((colors) => { // dynamique et async
    document.body.style.backgroundColor = colors.getRandomCssColor();
  });
});
*/