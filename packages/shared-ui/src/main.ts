import SharedButton from './components/SharedButton.vue';
import SharedBadge from './components/SharedBadge.vue';
import type { App } from 'vue';

export { SharedButton, SharedBadge };

export default {
  install(app: App) {
    app.component('SharedButton', SharedButton);
    app.component('SharedBadge', SharedBadge);
  }
};
