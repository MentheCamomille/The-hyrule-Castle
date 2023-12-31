import Hero from './Hero';
import Enemy from './Enemy';
import getUserInput from './userInput';

function heroAction(hero : Hero, enemy : Enemy, userChoice: number) {
  switch (userChoice) {
    case 1: {
      hero.attack(enemy);
      break;
    }
    case 2: {
      hero.heal();
      break;
    }
    default:
      break;
  }
}

export default function fight(hero : Hero, enemy : Enemy) {
  const userChoice = getUserInput();
  if (hero.getSpd >= enemy.getSpd) {
    if (userChoice === 3) {
      return 3
    } 
    if (userChoice === 4) {
      return 4
    } 
    if (userChoice === 5) {
      return 5
    }
    heroAction(hero, enemy, userChoice);
    if (enemy.getHp > 0) {
      enemy.attack(hero);
    }
  } else {
    console.log(`${enemy.getName} moves first`);
    enemy.attack(hero);
    if (hero.getHp > 0) {
      heroAction(hero, enemy, userChoice);
    }
  }
}
