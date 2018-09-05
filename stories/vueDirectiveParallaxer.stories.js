import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Centered from '@storybook/addon-centered';
import directive from '../src/directive';
Object.keys(directive).forEach(key => Vue.directive(key, directive[key]));



storiesOf('Directive Parallaxer', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(Centered)
  .add('Parallaxer', () => ({
    created(){
      console.log(directive)
    },
    data: () => ({
      speed1: number('Speed 1', 1),
      speed2: number('Speed 2', 1),
    }),
    template:
      `<div style="position:relative;width: 100%; padding:100px;">
        <p style="font-family:sans-serif; font-size:18px;line-height:2;margin-bottom:50px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum eget mi a volutpat. Proin ultricies sem fermentum arcu pulvinar, sed porta justo commodo. Integer facilisis tellus est, at dictum nunc elementum non. In suscipit dui quis ex eleifend, id facilisis odio laoreet. Donec id enim eu leo vulputate ultrices vitae nec neque. In sed nunc eros. Ut rutrum mi ut imperdiet posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultriLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum eget mi a volutpat. Proin ultricies sem fermentum arcu pulvinar, sed porta justo commodo. Integer facilisis tellus est, at dictum nunc elementum non. In suscipit dui quis ex eleifend, id facilisis odio laoreet. Donec id enim eu leo vulputate ultrices vitae nec neque. In sed nunc eros. Ut rutrum mi ut imperdiet posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultriLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum eget mi a volutpat. Proin ultricies sem fermentum arcu pulvinar, sed porta justo commodo. Integer facilisis tellus est, at dictum nunc elementum non. In suscipit dui quis ex eleifend, id facilisis odio laoreet. Donec id enim eu leo vulputate ultrices vitae nec neque. In sed nunc eros. Ut rutrum mi ut imperdiet posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris sodales placerat dui quis sollicitudin. Nam at velit et dolor porta volutpat eu ac nibh. Aliquam pulvinar nisi iaculis interdum faucibus. Nam volutpat diam a lacus tincidunt, id condimentum mauris iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sed nulla sapien.
        Vestibulum maximus feugiat tortor, et bibendum lectus lacinia eu. Quisque sit amet volutpat nibh. Pellentesque varius, ante non commodo fringilla, risus dolor finibus magna, sed dapibus enim risus quis purus. Aliquam ac ornare diam. Morbi id eros dui. Nam porttitor magna ac felis blandit ornare. Nunc quis ante nec quam semper molestie.</p>
        <div v-parallaxer="2" style="position:absolute;top:300px;left:300px;background: red; width: 200px; height: 100px;"></div>
        <div v-parallaxer="0.5" style="position:absolute;top:200px;left:600px;background: blue; width: 100px; height: 200px;"></div>
      </div>`,
  }), {notes: 'This is a note'});
