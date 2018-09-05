import transform from 'prefix';

export default {
  transform: null,
  inserted: (el, data) => {
    const browserTransform = transform('transform');
    // eslint-disable-next-line
    let requestAnimation = null;
    el.position = 0;

    /**
     * Checks if an element should be animated
     * @param {element} elv Element to check
     * @param {float} speed Element's speed
     */
    function elementIsVisible(elv, speed = 0) {
      const rect = elv.getBoundingClientRect();
      const center = rect.top + elv.clientHeight / 2 - window.innerHeight / 2;
      const top = speed < 0 ? rect.top + center * speed : rect.top;

      return {
        center,
        top: rect.top,
        bottom: rect.bottom,
        height: elv.clientHeight,
        visible: elv.clientHeight !== 0 && top < window.innerHeight && top >= -elv.clientHeight,
      };
    }

    function update() {
      const elContainer = el.parentElement;
      const inViewport = elementIsVisible(elContainer, data.value);
      const { visible, center } = inViewport;

      if (visible) {
        el.classList.add('js-in-viewport');
        el.position = center * data.value;
      }
      el.style[browserTransform] = `translate3d(0,${el.position}px,0)`;
      el.parallaxer = el.position;
      requestAnimation = requestAnimationFrame(update);
    }

    if (parseFloat(data.value)) {
      update();
    } else {
      // eslint-disable-next-line
      console.warn(
        `The parallaxer directive expects a float. The given value was: ${data.value}`,
        'in the element: ',
        el,
      );
    }
  },
};
