import axios from "axios";

class heroCalls {
  static getAllHeroes() {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        //URL HARD CODED
        url: "http://localhost:3001/heroes",
      })
        .then((response) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
          console.log(err);
        });
    });
  }

  static addHero({ hero }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        //URL HARD CODED
        url: "http://localhost:3001/heroes",
        data: {
          name: hero.name,
          hero_name: hero.hero_name,
          age: hero.age,
          gender: hero.gender,
          img: hero.img,
          description: hero.description,
          strength: hero.strength,
          speed: hero.speed,
          hp: hero.hp,
          abilities: hero.abilities,
        },
      })
        .then((response) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
          console.log(err);
        });
    });
  }

  static editHero(heroId, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        //URL HARD CODED
        url: `http://localhost:3001/heroes/${heroId}`,
        data: { payload },
      })
        .then((response) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
          console.log(err);
        });
    });
  }

  static findById(heroId) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        //URL HARD CODED
        url: `http://localhost:3001/heroes/${heroId}`,
      })
        .then((response) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
          console.log(err);
        });
    });
  }

  static deleteHero(heroId) {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        //URL HARD CODED
        url: `http://localhost:3001/heroes/${heroId}`,
      })
        .then((response) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
          console.log(err);
        });
    });
  }
}

export default heroCalls;
