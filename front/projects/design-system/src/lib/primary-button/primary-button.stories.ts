import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { PrimaryButtonComponent } from './primary-button.component';

storiesOf('primary-button', module)
  .add('without text', () => ({
    component: PrimaryButtonComponent, props: { btnClicked: action('\\o/') }
  }), {
    notes: 'Il a une valeur par défaut !'
  })
  .add('with a text', () => ({
    component: PrimaryButtonComponent, props: { text: 'Un super texte custom', btnClicked: action('\\o/') }
  }), {
    notes: 'Je peux valider des choses avec un texte, et ça quand même, c\'est pas donné à tout le monde'
  })
