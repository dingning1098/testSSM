/**
 * Created by 傻根她弟
 */

$(document).ready(function () {
    //设置首页信息
    createIndexInfo("index/profile?_" + $.now());

});
//设置首页信息
function createIndexInfo(url) {
    $(".sidebar-menu").html("");
    $(".username").html("");
    $(".roleNames").html("");
    $(".orgInfo").html("");
    
    $.getJSON(url, function (r) {
    	var sysinfo = r.data;
    	var menuList = r.data.menuList;
    	
    	//设置用户信息
    	//设置用户名：
    	$(".username").html(sysinfo.username);
    	$(".roleNames").html(sysinfo.roleNames);
    	$(".orgInfo").html(sysinfo.organizationName);
    	//以下是设置菜单
        for (var i = 0; i < menuList.length; i++) {
            var _li;
            if (menuList[i].type === 1) {
                _li = ['<li class="active treeview menu-open"><a href="#" title="'+menuList[i].name+'">',
                    '<i class="fa fa-dashboard ' + menuList[i].icon + '"></i>',
                    '<span>' + menuList[i].name + '</span>',
                    '<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>' +
                    '</a></li>'].join("");
                //是否有下级菜单
                if (menuList[i].children) {
                    var $li=$(_li);
                    $li.find("a").after('<ul class="treeview-menu"></ul>');
                    var childNodes = addMenu(menuList[i].children);
                    if (childNodes != "") {
                        $li.find(".treeview-menu").append(childNodes);
                        _li=$li.prop("outerHTML");
                    }
                }
            }
            if (menuList[i].type === 0) {
            	_li = '$(<li><a href="#" data-addtab="'+ menuList[i].id +'" data-target="#MasterTabs" data-url="' + menuList[i].url + '" data-title="'+menuList[i].name+'"><i class="fa fa-circle-o ' + menuList[i].icon + '"></i> ' + menuList[i].name + '</a></li>)';
            }
            $(".sidebar-menu").append(_li);

        }

    });
}
//递归显示菜单 支持多级
function addMenu(list) {
    if (list) {
        var lis="";
        for (var i = 0; i < list.length; i++) {
            var _li;
            if (list[i].children.length > 0) {
                _li = ['<li class="treeview"><a href="#">',
                    '<i class="fa fa-circle-o ' + list[i].icon + '">'+list[i].name+'</i>',
                    '<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>',
                    '</a></li>'].join("");
                //是否有下级菜单
                if (list[i].children) {
                    var $li=$(_li);
                    $li.find("a").after('<ul class="treeview-menu"></ul>');
                    var childNodes = addMenu(list[i].children);
                    if (childNodes != "") {
                        $li.find(".treeview-menu").append(childNodes);
                    }
                }
                _li= $li.prop("outerHTML");
            }
            if (list[i].children.length == 0) {
                _li = $('<li><a href="#" data-addtab="'+ list[i].id +'" data-target="#MasterTabs" data-url="' + list[i].url + '" data-title="'+list[i].name+'"><i class="fa fa-circle-o ' + list[i].icon + '"></i> ' + list[i].name + '</a></li>');
            }
            lis+=$(_li).prop("outerHTML");
        }
        return lis;
    }
}

function logout(){
	$.ajax({
    	contentType:"application/json",
        url: "login/logout",
        type:'post',
        dataType: 'json',
        success: function (result) {
            var code = result.code;
            var msg = result.message;
        	
            if(code != 1){
            	alert(msg);
            	return;
            }else{
            	parent.location.href = 'login.html';
            }
        }
    });
}

$(window).on('resize', function () {
    var $content = $('.content-wrapper');
    $content.height($(this).height()-120);
}).resize();