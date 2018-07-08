Vue.component('customcoupon', {
    props: ['code'],

    template: `
        <input type="text"
               :value="code"
               @input="updateCode($event.target.value)"
               ref="input">
    `,

    methods: {
        updateCode(code) {
            // Atttach validation + sanitization here.

            this.$emit('input', code);
        }
    }
});


new Vue({
    el: '#app',

    data: {
        coupon: 'FREEBIE' // Maybe from DB or querystring.
    }
});