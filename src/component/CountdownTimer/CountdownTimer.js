import VueTypes from 'vue-types';

function isDate(value) {
  return value instanceof Date;
}

// @vue/component
export default {
  name: 'CountdownTimer',
  props: {
    countdownDate: VueTypes.custom(isDate),
    showDays: VueTypes.bool.def(true),
    showHours: VueTypes.bool.def(true),
    showMinutes: VueTypes.bool.def(true),
    showSeconds: VueTypes.bool.def(true),
  },
  data: () => ({
    countdownInterval: null,
    countdown: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    text: '',
  }),
  created() {
    this.startCountDown();
  },
  destroyed() {
    clearInterval(this.countdownInterval);
  },
  methods: {
    startCountDown() {
      this.countdownInterval = setInterval(() => {
        const distance = this.countdownDate.getTime() - new Date().getTime();
        this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        Object.keys(this.countdown).forEach(key => {
          if (this.countdown[key] < 10) {
            this.countdown[key] = `0${this.countdown[key]}`;
          }
        });

        this.text = `${this.showDays && this.countdown.days} ${this.showHours &&
          this.countdown.hours} ${this.showMinutes && this.countdown.minutes} ${this.showSeconds &&
          this.countdown.seconds}`;
      }, 1000);
    },
  },
};
