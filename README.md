
# tdesign-mobile-vue-starter-chat

## 如何编译 Vite+ Vue3项目 并且用cordova 编译成 android或ios应用
#### 1.安装nodejs, Vite, Vue3
#### 2.安装cordova
#### 3.安装android studio + android SDK + Java 17

     环境变量:
      JAVA_HOME:C:\Program Files\Java\jdk-17.0.2
      ANDROID_HOME:C:\Users\Administrator\AppData\Local\Android\Sdk
      ANDROID_SDK_ROOT:C:\Users\Administrator\AppData\Local\Android\Sdk
      Gradle_HOME:C:\Program Files\gradle-7.3

      Path:JAVA_HOME\bin;ANDROID_HOME\platform-tools;ANDROID_HOME\emulator;ANDROID_SDK_ROOT\build-tools\30.0.2;ANDROID_SDK_ROOT\platform-tools;ANDROID_SDK_ROOT\tools;ANDROID_SDK_ROOT\comdline-tools\latest\bin;Gradle_HOME\bin;


#### 4.创建vue3项目
#### 5.修改路由配置文件
   #### 在 Vue Router 配置中，使用 createWebHashHistory 而不是 createWebHistory。这是因为 Cordova 的 browser 平台默认不支持 HTML5 模式，需要使用 hash 模式：
   


   import { createRouter, createWebHashHistory } from 'vue-router';
   import Home from './views/Home.vue';
   
   const routes = [
       { path: '/', component: Home },
       // 其他路由
    ];
    
    const router = createRouter({
       history: createWebHashHistory(),
    routes,
    });
    
    export default router;

#### 6.编译vue3项目
#### 7.创建Cordova项目
#### 8.为Cordova项目添加android平台
#### 9.修改cordova项目的编译配置文件config.xml
   文件中添加下面的内容
    <content src="index.html" />
    <allow-navigation href="*" />
    <allow-intent href="*" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />



#### 10.拷贝编译好的vue3项目(dist下所有文件)到cordova项目的www目录下
#### 11.编译cordova项目
#### 12.运行和测试cordova项目

基于 TDesign Mobile Vue 组件库开发的，即时通讯模板


[预览地址](https://tdesign-mobile-vue-starter-chat.surge.sh/)