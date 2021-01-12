<template>
  <div>
    <keep-alive>
        <v-header :dark='dark' :plan='plan' :product='product'></v-header>
    </keep-alive>

    <keep-alive>
        <router-view  @isdark="getDark"></router-view>
    </keep-alive>
    <keep-alive>
        <v-foot :plan='plan' :product='product' :caselist='caselist' :BackUp='BackUp' :CopyRight='CopyRight' :weixinImg='weixinImg' :appImg='appImg'></v-foot>
    </keep-alive>

    <v-hotline :hotline="hotline"></v-hotline>
  </div>
</template>
<!-- <script type="text/javascript" src='http://www.zhongqinsoft.com/zq_saas/public/json/index_footer.json'></script> -->
<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  import footer from './components/foot/foot.vue';
	import hotline from './components/hotline/hotline.vue';
	export default{
    data(){
      return{
        dark: false,
        plan:{},
        product:{},
        caselist:{},
        BackUp:'',
        CopyRight:'',
        weixinImg:'',
        appImg:'',
        language:parseInt(localStorage['lang']),
        baseUrl:'',
        hotline:'',
        title:'',
        description:'',
        keywords:'',
        Newstitle:'',
        Newsdescription:'',
        Newskeywords:''
      }
    },
    watch:{
      "$route": "darkFalse"
    },
    components: {
			'v-header': header,
      'v-foot': footer,
      'v-hotline': hotline
		},
    methods:{
      getDark(){
        this.dark=!this.dark;
      },
      darkFalse(){
        this.dark=false;
        sessionStorage['route'] = this.$route.fullPath;
        this.getTDK();
      },
      getCommonData(){
        //这部分主要是去请求头部、尾部公用的信息
        //获取方案的分类
        /*this.$http.jsonp(baseUrl+'system_admin/saas_plan/Plan_Interface_GetContent.html?pid=1&field=37&method=m&lang='+lang).then((response) => {
            this.plan=response.body.con   tent;
            if(lang==0){
              $(this.plan).each(function(){
                this.PlanTitle=this.PlanTitle.substring(0,(this.PlanTitle.length-4));
              });
            }
          });*/
        //获取产品的分类
          /*this.$http.jsonp(baseUrl+'system_admin/saas_product/Product_Interface_GetContent.html?pid=1&field=35&method=m&lang='+lang).then((response) => {
            this.product=response.body.content;
          });*/
          //获取案例的分类
          /*this.$http.jsonp(baseUrl+'system_admin/saas_case/Case_Interface_GetContent.html?pid=1&method=m&field=21&lang='+lang).then((response) => {
            this.caselist=response.body.content;
          });*/
          //获取关于我们二维码 版权信息
          /*this.$http.jsonp(baseUrl+'system_admin/saas_company/Company_Interface_GetContent.html?pid=1&field=2-3-4-9-10&lang='+lang).then((response) => {
            let website=response.body.base_url;
            let msg=response.body.content;
            this.BackUp=msg.BackUp;
            this.CopyRight=msg.CopyRight;
            this.weixinImg=response.body.base_url+'public/'+msg.WeixinCode;
            this.appImg=response.body.base_url+'public/'+msg.APPCode;
            this.hotline=msg.Tel;
          });*/
          let that=this;
          if(localStorage['lang'] == 0){
            //http://www.zhongqinsoft.com/wangu/dist/data/index_body.json
            this.$http.get(baseUrl+'public/json/index_footer.json?time='+Date.parse(new Date())).then((response) => {
              let data=response.body;
              that.baseUrl=data.base_url;
              that.title = data.seo.SEO_Title;
              that.description = data.seo.SEO_Description;
              that.keywords = data.seo.SEO_Keywords;
              $('head').find('title').html(this.title);
              $('head').find('meta[name="keywords"]').attr('content',this.keywords);
              $('head').find('meta[name="description"]').attr('content',this.description);
              //获取解决方案
              that.plan=data.plan;
              if(lang==0){
                $(that.plan).each(function(){
                  if(this.PlanTitle.indexOf('解决方案')!=-1){
                    this.PlanTitle=this.PlanTitle.substring(0,(this.PlanTitle.length-4));
                  }
                  
                });
              }
              //获取产品与服务
              that.product=data.product;
              //获取案例
              that.caselist=data.case;
              //关于我们和热线
              let company=data.company;
              that.BackUp=company.BackUp;
              that.CopyRight=company.CopyRight;
              that.weixinImg=that.baseUrl+'public/'+company.WeixinCode;
              that.appImg=that.baseUrl+'public/'+company.APPCode;
              that.hotline=company.Tel;
            });
          }else{
            this.$http.get(baseUrl+'public/json/index_footer_en.json?time='+Date.parse(new Date())).then((response) => {
              let data=response.body;
              that.baseUrl=data.base_url;
              that.title = data.seo.SEO_Title;
              that.description = data.seo.SEO_Description;
              that.keywords = data.seo.SEO_Keywords;
              $('head').find('title').html(this.title);
              $('head').find('meta[name="keywords"]').attr('content',this.keywords);
              $('head').find('meta[name="description"]').attr('content',this.description);
              //获取解决方案
              that.plan=data.plan;
              if(lang==0){
                $(that.plan).each(function(){
                  if(this.PlanTitle.indexOf('解决方案')!=-1){
                    this.PlanTitle=this.PlanTitle.substring(0,(this.PlanTitle.length-4));
                  }
                  
                });
              }
              //获取产品与服务
              that.product=data.product;
              //获取案例
              that.caselist=data.case;
              //关于我们和热线
              let company=data.company;
              that.BackUp=company.BackUp;
              that.CopyRight=company.CopyRight;
              that.weixinImg=that.baseUrl+'public/'+company.WeixinCode;
              that.appImg=that.baseUrl+'public/'+company.APPCode;
              that.hotline=company.Tel;
            });
          }
          
          console.log('技术支持：建站人，欢迎访问：http://www.jianzhanren.cn/');
      },
      getTDK(){
        let that = this;
        if(this.$route.name == "newsDetail"){
          this.$http.jsonp(baseUrl+'system_admin/saas_news/News_Interface_GetContent.html?lang='+lang+'&pid=1&field=122-123-124&method=s&nid='+this.$route.params.id+'&sort=1&neighbor=2&nfield=13').then((response) => {
          /*&field=13-15-18-19*/
          /*that.$emit('title','title');*/
          that.Newstitle = response.body.content.SEO_Title;
          that.Newsdescription = response.body.content.SEO_Description;
          that.Newskeywords = response.body.content.SEO_Keywords;
          $('head').find('title').html(that.Newstitle);
          $('head').find('meta[name="keywords"]').attr('content',that.Newskeywords);
          $('head').find('meta[name="description"]').attr('content',that.Newsdescription);
          },(error)=>{
            return
            console.log(error)
          });
        }else{
          $('head').find('title').html(this.title);
          $('head').find('meta[name="keywords"]').attr('content',this.keywords);
          $('head').find('meta[name="description"]').attr('content',this.description);
        }
      }
    },
    created(){
      this.getCommonData();
      //sessionStorage['route'] = this.$route.path;
    },
    mounted(){
      //console.log(this.$route)
      /*alert(this.$store)*/
      
      

    }
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
