<template>
    <div>
        <h2>The count is : {{count}}</h2>

        <p> 
            <button @click="count +=10">
                Increment
            </button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {count: 10};
    }
}
</script>
