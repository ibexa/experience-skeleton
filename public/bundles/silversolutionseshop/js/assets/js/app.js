// assets/js/app.js
import Vue from 'vue';

import Cockpit from './components/Cockpit'

/**
* Create a fresh Vue Application instance
*/
new Vue({
  el: '#app',
  components: {Cockpit}
  //template: '<cockpit token="' + token + '"></cockpit>'
});
