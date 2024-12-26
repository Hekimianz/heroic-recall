import "../css/level.css";
import { useEffect, useState } from "react";
import Card from "./Card";
import TransitionLevel from "./TransitionLevel";
function Level({
  level,
  highScore,
  setHighScore,
  setGameOver,
  setGameStarted,
  setTransition,
  mute,
  selectSound,
  winSound,
  loseSound,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState([]);
  const token = import.meta.env.VITE_API_TOKEN;
  console.log(import.meta.env.VITE_API_TOKEN);
  let numberOfHeroes = 6;
  for (let i = 1; i < level; i++) {
    numberOfHeroes++;
    numberOfHeroes++;
  }

  // update high score
  useEffect(() => {
    if (level > highScore) {
      setHighScore(level - 1);
      localStorage.setItem("highScore", level - 1);
    }
  }, [level]);

  // fetch data
  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const fetchPromises = [];
        const heroIds = getHeroIds(numberOfHeroes);

        for (let i = 0; i < numberOfHeroes; i++) {
          const url = `https://superheroapi.com/api/${token}/${heroIds[i]}`;
          fetchPromises.push(fetch(url).then((response) => response.json()));
        }

        const heroes = await Promise.all(fetchPromises);
        setData(heroes);
      } catch (error) {
        console.error("Error fetching superheroes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroes();
  }, [level]);

  function getHeroIds(n) {
    const min = 1;
    const max = 731;
    const heroIds = new Set();
    while (heroIds.size < n) {
      const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
      heroIds.add(randomId);
    }
    return Array.from(heroIds);
  }
  const handleCardClick = (id) => {
    if (clicked.includes(id)) {
      setGameOver(true);
      setGameStarted(false);
      if (!mute) {
        loseSound.play();
      }
      return;
    }
    if (clicked.length + 1 === numberOfHeroes) {
      transitionLevel();
    }

    setClicked((prev) => [...prev, id]);
    const shuffledData = shuffleArray([...data]);
    setData(shuffledData);
    if (!mute) {
      selectSound.play();
    }
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const transitionLevel = () => {
    setTransition(true);
    if (!mute) {
      winSound.play();
    }
    setClicked([]);
    window.scrollTo({
      top: (document.body.scrollHeight - window.innerHeight) / 2,
      left: (document.body.scrollWidth - window.innerWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="main--conts" id="level--cont">
      <span id="highScore">High Score: {highScore}</span>
      <span id="currentLevel">Level: {level}</span>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <section id="allCards--cont">
          {data.map((hero) => {
            return (
              <Card
                key={hero.id}
                id={hero.id}
                name={hero.name}
                image={hero.image.url}
                handleCardClick={handleCardClick}
              />
            );
          })}
        </section>
      )}
    </section>
  );
}

export default Level;
