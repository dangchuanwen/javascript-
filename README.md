#说明
	该函数用于上下轮播的无缝滑动，可用于网站上的公告显示等。由于基于css3 的 2d 转换实现的，所以兼容不太好，但是可以通过自定义js函数来替代该效果所需要的css3效果。
#安装

	用编译器打开test.html， 复制 script 里面的addBanner函数 放到你需要的地方。
#使用
	##在使用该特效时，需要一定的结构层，如下：
	
		<div class="box">
        		<div class="content" id="content">
            			<div class="one" style="background-color:yellow">2</div>
            			<div class="one" style="background-color:orangered">3</div>
            			<div class="one" style="background-color:tomato">4</div>
            			<div class="one" style="background-color:green">5</div>
       			 </div>
    		</div>
	
	##说明
		如上所示，class="box"的div元素为窗口元素，具体css要求 可以查看test.html 下的css设置。
		          class="content"的div元素为 单元元素的盒子元素，具体css要求也在文件的css设置。
		          class="one"的div元素为单元元素，具体css要求同上也在文件中。
	##绑定事件
		具体怎么使用可查看文件下的addBanner函数，里面有注释
#扩展
	可通过用js写的元素移动函数来替代所需要的css3效果，也可以改变 方向 成为 其他方向的 无缝滑动。				