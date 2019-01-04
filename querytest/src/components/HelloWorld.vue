<template>
  <div class="hello">
    <div @click="getdata">登录</div>
    <div @click="postdata">注册</div>
    <input v-model="temp.phone" type="text" placeholder="手机号码">
    <input v-model="temp.password" type="password" placeholder="密码">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data() {
      return {
          temp: {
              phone: '',
              password: ''
          }
      }
    },
    methods: {
      getdata() {
          this.$r.get('/login').then(re => {
              console.log(re)
          }).catch(errs => {
              console.log(errs)
          })
      },
        postdata() {
            this.$r.post('/register', this.temp).then(re => {
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
