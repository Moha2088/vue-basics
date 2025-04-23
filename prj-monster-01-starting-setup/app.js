function GetRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },

  computed: {
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }

      return { width: this.playerHealth + "%" };
    },

    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }

      return { width: this.monsterHealth + "%" };
    },

    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },

  methods: {
    StartGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
    },

    Surrender(){
      this.winner = 'monster';
    },

    AttackMonster() {
      this.currentRound++;
      const attackDamage = GetRandomValue(5, 12);
      this.monsterHealth -= attackDamage;
      this.AttackPlayer();
      this.count += 1;
    },

    AttackPlayer() {
      const attackDamage = GetRandomValue(8, 15);
      this.playerHealth -= attackDamage;
    },

    SpecialAttackMonster() {
      this.currentRound++;
      const attackDamage = GetRandomValue(10, 25);
      this.monsterHealth -= attackDamage;
      this.AttackPlayer();
    },

    HealPlayer() {
      this.currentRound++;
      const healValue = GetRandomValue(8, 20);

      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.AttackPlayer();
    },
  },
});

app.mount("#game");
