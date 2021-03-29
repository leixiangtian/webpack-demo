import $ from "jquery";

import "./assets/css/style.css"
import "./assets/css/style.less"
import "./assets/css/style.scss"

// 测试babelJs，需安装@babel/plugin-proposal-class-properties插件支持class语法
class test {
  static info = {
    name:"小明",
    age:"24"
  }
}
console.log(test.info)

$(()=>{
  // $("ul").css("background","orange");
  console.log($("body"))
})