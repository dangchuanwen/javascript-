# 基于JQuery的上下公告轮播插件
## 说明
#### 该插件是一个基于JQuery的上下轮播公告插件，所需依赖为JQuery，了解JQuery请移步[https://www.runoob.com/jquery/jquery-tutorial.html]
## 安装
#### git clone 该资源。文件下的  _jquery-3.3.1.js_  为所需依赖文件，_dcwNoticeTool.js_ 为插件所在文件。在需要的html文件的head部分引入这两个文件。类似于

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="jquery-3.3.1.js"></script>
    <script src="dcwNoticeTool.js"></script>
    </head> 
## 使用
#### 请看下面的代码块
    <div class="box">                                                 <!-- 相对定位 -->
        <div class="content" id="content">                            <!-- 绝对定位 -->
            <div class="one" style="background-color:yellow">1</div>
            <div class="one" style="background-color:orangered">2</div>
            <div class="one" style="background-color:tomato">3</div>
            <div class="one" style="background-color:green">4</div>
        </div>
    </div>
> class 为 box 的 div 元素为容器元素，其 css 需设置 

    position: relative;      
    overflow: hidden;
> class 为 content 的div元素为轮播基本元素的父元素，其 css 需设置    

    position: absolute;
    top: 0px;
    left: 0px;
> class 为one 的元素为轮播基本元素，其 css 宽高不能超过容器元素的宽高

#### 引入
> 在html文件的 body 底部 执行 插件绑定，请看下面的代码
    
    -
        <script>
           _NoticeTool('content', 3000);   //第一个参数为轮播基本元素的父元素的id,第二个参数为轮播间隔时间
         </script>
    </body>
    
    
    
    
    
    
    