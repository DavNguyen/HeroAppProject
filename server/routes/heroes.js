const express = require("express");
const router = express.Router();
//IMPORTS HERO MODELS
const Hero = require("../models/Hero");

//RETURNS ALL HEROES
router.get("/", async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (err) {
    res.json({ message: err });
  }
});

//CREATES A HERO
router.post("/", async (req, res) => {
  const hero = new Hero({
    name: req.body.name,
    hero_name: req.body.hero_name,
    age: req.body.age,
    gender: req.body.gender,
    img: req.body.img,
    description: req.body.description,
    strength: req.body.strength,
    speed: req.body.speed,
    hp: req.body.hp,
    abilities: req.body.abilities,
  });
  try {
    const savedHero = await hero.save(); //saves to database
    res.json(savedHero);
  } catch (err) {
    res.json({ message: err });
  }
});

//RETURNS SPECIFIC HERO
router.get("/:heroId", async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.heroId);
    res.json(hero);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETES A HERO
router.delete("/:heroId", async (req, res) => {
  try {
    const removedHero = await Hero.remove({ _id: req.params.postId });
    res.json(removedHero);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATES EXISTING HERO
router.put("/:heroId", async (req, res) => {
  try {
    const updateHero = await Hero.findByIdAndUpdate(
      req.params.heroId,
      { ...req.body.payload },
      {
        new: true,
      }
    );
    res.json(updateHero);
  } catch {
    res.json({ message: err });
  }
});

module.exports = router;
