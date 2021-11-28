<template>

    <div class="hero-body has-background-white pb-0">  
      <div class="columns">
        <div class="column is-8">
          <section class="hero is-large is-primary">
            <div class="hero-body">
              <p class="title">
                スマ買い
              </p>
              <p class="subtitle">
                価格ではなく価値による購買比較サイト
              </p>
            </div>
          </section>
        </div>
      </div>

      <div class="column is-4">
        シミュレータ広告枠
      </div> 
      

        <v-col v-for="article in articles" :key="article.id">
        <v-card class="mx-auecto" width="300" height="330">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="article.image.url"
          >
            <v-card-title>{{ article.title }}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div class="summary">{{ article.summary }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
          詳細画面で記事を取得できるように、記事のidをパラメーターとして渡す -->
          <!-- <router-link :to="{ name: 'article-detail', params: { id: article.id } }">
            <v-btn color="orange" text>More</v-btn>
          </router-link> -->


  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title}}<br/>
        {{ content.resume}}<br/>
        {{ content.text}}
      </nuxt-link>
    </li>
  </ul>  
  
  </div>   

</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service`-id部分は自分のサービスidに置き換えてください
      'https://keiryosoken.microcms.io/api/v1/articles',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'b5c983ce3cb64eaebec51f2ac50a37497f42' }
      }
    )
    return data
  }
}
</script>