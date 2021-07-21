const calc = Vue.createApp({
  data() {
    return {
      input: 0
    }
  },
  methods: {
    plus(but) {
      this.input ? this.input = this.input = `${this.input}${but.target.value}` : this.input = `${but.target.value}`
    },
    del() {
      if (this.input.slice(this.input.length - 3) == " - " || this.input.slice(this.input.length - 3) == " * " || this.input.slice(this.input.length - 3) == " / " || this.input.slice(this.input.length - 3) == " + ") {
        this.input = this.input.slice(0, -3);
      } else {
        this.input = this.input.slice(0, -1);
      }
       if (this.input.length == 0) {
         this.input = 0;
       }
    },
    tochka() {
      this.input = `${this.input}.`
    },
    pribav() {
      this.input = `${this.input} + `
    },
    minus() {
      this.input = `${this.input} - `
    },
    delit() {
      this.input = `${this.input} / `
    },
    umnozh() {
      this.input = `${this.input} * `
    },
    ravno() {
      let timeStr = eval(this.input);
      this.input = timeStr.toString();
    }
  }
}).mount("#calc")
