window.Event= new class{
    constructor(){
        this.vue = new Vue();
    }


    fire(event, data = null){
        this.vue.$emit(event, data);
    } 

    listen(event,callback){
        this.vue.$on(event,callback);
    }
}

Vue.component('coupon', {
    template: `
        
            <input placeholder ="enter some coupon" @blur = "onCouponApplied"/>
        
    `,

    methods:{
        onCouponApplied(){
            //this.$emit('applied'); parent methond
            Event.fire('applied')
        }
    }
    


});




new Vue({
    el: '#root',

    data:{
        couponApplied: false,
    },

    created(){
        Event.listen('applied', () => alert('Handling it!'))
    },
    /* parent method 
    methods:{
        onCouponApplied(){
            this.couponApplied = true;
        }
    }*/
});