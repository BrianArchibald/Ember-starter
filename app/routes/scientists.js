import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Marie Curie', 'Carl Sagan', 'Albert Hofmann'];
    }
});
