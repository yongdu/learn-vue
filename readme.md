### Vue.js

1. `v-model` 
```html
<div id="root">
        <input type="text" id="input" v-model="message">
        <p>The value of the input is: {{message}}</p>
</div>
    
  <script>
      var app = new Vue({
        el:'#root',
        data:{
            message:'Hello world!',
        }
      })
    </script>  
```

2. `v-for` `v-text`
```html
<ul>
    <li v-for="name in names" >{{name}}</li>  
    <li v-for="name in names" v-text="name"></li>  
</ul>>
```

3. `@` is shorthand for`v-on`
```html
<button @click="addName">Add Name</button>
<button v-on:click="addName">Add Name</button>
```

4. `:` is shorthand for `v-bind`
```html
<button v-bind:title="btnTitle">Hover over me</button>
<button :title="btnTitle">Hover over me</button>
```