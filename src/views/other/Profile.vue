<template>
  <v-container>
    <v-card max-width="375" class="ml-1">
      <v-img :src="admin.avatar" height="300px" dark v-ripple>
        <v-row class="fill-height">
          <v-card-title>
            <v-spacer></v-spacer>
            <!-- <v-btn dark icon class="mr-1" @click="change">
              <v-icon>mdi-pencil</v-icon>
            </v-btn> -->
          </v-card-title>

          <v-spacer></v-spacer>
        </v-row>
      </v-img>

      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="cyan">mdi-email</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ admin.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="cyan">mdi-map-marker</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ admin.id }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <mu-button @click="click">修改</mu-button>
      <mu-button @click="change">保存</mu-button>
    </v-card>
    <div class="right" v-show="show">
      <div class="item">
        <h4>用户名：</h4>
        <input type="text" v-model="admin.name" class="textBox" />
      </div>
      <div class="item">
        <h4>密码：</h4>
        <input type="text" v-model="admin.password" class="textBox" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      admin: this.$store.state.admin,
      show: false
    }
  },
  created() {
    this.$store.commit('setAdmin', JSON.parse(localStorage.getItem('admin')))
  },
  methods: {
    click() {
      this.show = true
    },
    change() {
      this.axios({
        method: 'post',
        url: this.GLOBAL.baseUrl + '/sysAdmin/u',
        data: {
          id: this.admin.id,
          name: this.admin.name,
          password: this.admin.password,
          avatar: this.admin.avatar
        }
      }).then(console.log('信息修改成功'), (this.show = false))
      alert('信息修改成功')
      // this.admin.id = '123456789'
      // this.admin.name = 'new name'
      // this.$store.commit('setAdmin', this.admin)
    }
  }
}
</script>
<style scoped lang="scss">
.mr-1 {
  margin-top: -240px;
  margin-left: 300px;
}
.mask {
  z-index: 900;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
