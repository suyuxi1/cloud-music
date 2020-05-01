<template>
  <div>
    <h3>歌曲类型管理</h3>
    <span v-for="(item, index) in menus" :key="index" class="gutter">
      <mu-button :color="item.icon">{{ item.title }}</mu-button>
    </span>
    <div class="types">
      <span v-for="(item, index) in items" :key="index" class="gutter ">
        <mu-button class="type" @click="getMusic(item.type)">{{ item.type }}</mu-button>
      </span>
      <div class="card">
        <div class="item" v-for="(music, index) in musicItem" :key="index">
          <div class="top">
            <img :src="music.thumbnail" :title="music.songListName" />
            <div class="songTitle">
              <!-- <span class="titleFont">{{ music.songListName }}</span> -->
            </div>
          </div>
          <div class="bottom">
            <span class="grayFont">{{ music.type }}</span>
            <span class="grayFont">{{ music.likeCount }}</span>
            <span class="grayFont">{{ music.playCount }}</span>
          </div>
        </div>
      </div>
      <!-- <div class="items">
        <div v-for="(item1, index) in item.child" :key="index" class="img">
          <v-img class="white--text align-end" height="150px"> </v-img>
          <img :src="item1.thumbnail" alt="" :title="item1.song_list_name" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicType',
  data() {
    return {
      menus: [],
      items: [],
      musicItem: []
    }
  },
  created() {
    let index = this.$route.query.index
    let index1 = this.$route.query.index1
    this.menus = JSON.parse(localStorage.getItem('menuList'))[index].subMenus[index1].subMenus
    // console.log(this.$store.state.admin.roles[0].roleId())

    this.axios.get(this.GLOBAL.baseUrl + '/songList/all?roleId=' + localStorage.getItem('roleId')).then((res) => {
      this.items = res.data.data
    })
  },
  methods: {
    getMusic(field) {
      this.axios({
        method: 'get',
        url: this.GLOBAL.baseUrl + '/songList/blurSelect?roleId=' + localStorage.getItem('roleId'),
        params: {
          field: field
        }
      }).then((res) => {
        this.musicItem = res.data.data
        console.log(this.musicItem)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  background-color: #0097a7;
  width: 120px;
  height: 40px;
  font-size: 14px;
  color: white;
  border: none;
}
.container {
  width: 90%;
  height: 100vh;
  display: flex;
  display: flex;
  flex-direction: column;
}
.top {
  width: 100%;
  height: 80%;
  position: relative;
}
.songTitle {
  height: 20%;
  position: absolute;
  width: 100%;
  z-index: 3;
  bottom: 20px;
}
.top img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.bottom {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.card {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
.item {
  width: 28%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bar {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.grayFont {
  font-size: 16px;
  color: #607d8b;
}
.titleFont {
  font-size: 18px;
  font-weight: 600;
  color: white;
}
.types {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.type {
  background-color: rgba(241, 141, 141, 0.5);
}
.items {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.img {
  width: 100px;
  height: 100px;
  bottom: 10px 10px 10px 10px;
}
.img img {
  width: 100%;
  height: 100%;
  // border-radius: 10%;
}
</style>
