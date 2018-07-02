Vue.component('task-list',{
    template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',
    data() {
        return {
            tasks:[
                {task: 'Go to office', compelte:true},
                {task: 'Go to bed', compelte:false},
                {task: 'Go to sky', compelte:true},
                {task: 'Go to sea', compelte:false}
            ]
        }
    }
});

Vue.component('task',{
    template: '<li><slot></slot></li>'
});

Vue.component('message',{
    props:['title', 'body'],
    template: '<article class="message"><div class="message-header">{{title}}<button class="delete" aria-label="delete"></button></div><div class="message-body">{{body}}</div></article>'
});

new Vue({
    el: '#root',
    data: {
        message: "Hi",
    }
});