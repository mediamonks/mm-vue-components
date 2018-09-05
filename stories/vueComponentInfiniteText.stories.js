import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Centered from '@storybook/addon-centered';
import TextInfinite from '../src/component/TextInfinite';

storiesOf('Component infinite text', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(Centered)
  .add('Infinite text', () => ({
    data: () => ({
      textToShow: text('Text to show', 'Lorem ipsum dolor sit amet'),
      acceleration: number('Acceleration', 0),
      padding: number('Padding', 1),
      speed: number('Speed', 1),
    }),
    components: {
      TextInfinite,
    },
    template:
      `<div style="overflow: hidden; width: 100vw;">
        <text-infinite
            :text="textToShow"
            :speed="speed"
            :acceleration="acceleration"
            :padding="padding">
        </text-infinite>
       </div>`,
  }), {notes: 'This is a note'});
