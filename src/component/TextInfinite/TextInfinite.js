import VueTypes from 'vue-types';
import transform from 'prefix';

// @vue/component
export default {
  name: 'TextInfinite',
  props: {
    text: VueTypes.string.def('INFINITE'),
    speed: VueTypes.number.def(1),
    acceleration: VueTypes.number.def(0),
    padding: VueTypes.number.def(3),
    repeat: VueTypes.number.def(2),
  },
  data() {
    return {
      textWidth: null,
      containerWidth: 0,
      position: 0,
      lastTime: 0,
      time: 0,
      totalItems: 1,
    };
  },
  mounted() {
    this.transform = transform('transform');
    this.handleResize();
    this.update();
    this.addEventsListeners();
  },
  destroyed() {
    cancelAnimationFrame(this.requestAnimation);
    this.removeEventsListeners();
  },
  methods: {
    getTextWidth() {
      return this.$refs.text[0].getBoundingClientRect().width;
    },
    getContainerWidth() {
      return this.$el.clientWidth;
    },
    handleResize() {
      this.textWidth = Math.round(this.getTextWidth());
      this.containerWidth = this.getContainerWidth();
      this.totalItems = Math.round(this.containerWidth / this.textWidth) + this.repeat + 1 || 2;
    },
    update() {
      this.time = this.time + this.speed + this.acceleration;
      this.animateWrapper();
      this.requestAnimation = requestAnimationFrame(this.update);
    },
    animateWrapper() {
      if (this.position < -this.textWidth * this.repeat + this.speed + this.acceleration) {
        this.lastTime = this.time;
        this.position = 0;
      } else {
        this.position = -(this.time - this.lastTime);
      }

      this.$refs.wrapper.style[this.transform] = `translate3d(${this.position}px,0,0)`;
    },
    addEventsListeners() {
      window.addEventListener('resize', this.handleResize);
    },
    removeEventsListeners() {
      window.removeEventListener('resize', this.handleResize);
    },
  },
};
