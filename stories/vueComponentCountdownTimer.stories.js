import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Centered from '@storybook/addon-centered';
import CountdownTimer from '../src/component/countdownTimer';

storiesOf('Component countdown', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(Centered)
  .add('Countdown timer', () => ({
    data: () => ({
      date: new Date('Sep 24, 2018 15:00:00'),
    }),
    components: {
      CountdownTimer,
    },
    template:
      `<h1 style="font-family:sans-serif;"><CountdownTimer :countdown-date="date"/></h1>`,
  }));
