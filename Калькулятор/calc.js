const calc = Vue.createApp({
  data() {
    return {
      input: 0,
      inputs: [],
      seen: true
    }
  },
  methods: {
    plus(but) {
      this.input ? this.input = `${this.input}${but.target.value}` : this.input = `${but.target.value}`
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
      function isInteger(num) {
        return (num ^ 0) === num;
      }
      if (!isInteger(timeStr)) {
        this.input = timeStr.toFixed(2).toString();
      } else {
        this.input = timeStr.toString();
      }
      this.inputs.unshift(this.input);
      if (this.inputs.length >= 5) {
        this.inputs.length = 5;
      }
      localStorage.setItem("calc", JSON.stringify(this.inputs));
    },
    reverse() {
      this.seen = !this.seen;
    },
    reverseIf() {
      this.seen = true ? true : false;
    },
    clean(index) {
      this.inputs.splice(index, 1);
      localStorage.setItem("calc", JSON.stringify(this.inputs))
    },
    paste(index) {
      if (this.input == 0) {
        this.input = `${this.inputs[index]}`
      } else if (this.input.slice(this.input.length - 3) == " - " || this.input.slice(this.input.length - 3) == " * " || this.input.slice(this.input.length - 3) == " / " || this.input.slice(this.input.length - 3) == " + ") {
        this.input = `${this.input}${this.inputs[index]}`
      } else {
        this.input = `${this.inputs[index]}`
      }
    }
  },
  computed: {
    width() {
      if (this.input.length >= 11) {
        return true
      }
      return false
    }
  },
  mounted() {
    if (localStorage.getItem("calc")) {
      this.inputs = JSON.parse(localStorage["calc"]);
    }
  }
}).mount("#calc")
