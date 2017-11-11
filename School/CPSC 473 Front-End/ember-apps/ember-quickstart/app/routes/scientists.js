import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return ['Marie Curie','Mar Jemison', 'Albert Hofmann'];
  }
});
