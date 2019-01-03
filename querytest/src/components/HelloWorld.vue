<template>
  <div class="hello">
    <div @click="getdata">get</div>
    <div @click="postdata">post</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    methods: {
      getdata() {
          this.$r.get('/admin/login').then(re => {
              console.log(re)          }).catch(errs => {
              console.log(errs)
          })
      },
        postdata() {
            this.$r.post('/admin/register', {name: 'fangyuan', phone: '123456'}).then(re => {
                console.log(re)
            }).catch(errs => {
                console.log(errs)
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
