<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="ctx" value="${pageContext.request.contextPath}/"/>
<!-- 默认使用极速模式，作用于360浏览器、QQ浏览器等国产双核浏览器： -->
<meta name="renderer" content="webkit" />
<!-- 默认使用极速模式，作用于其他双核浏览器：-->
<meta name="force-rendering" content="webkit"/>
<!-- 如果有安装 Google Chrome Frame 插件则默认使用Chromium内核（也就是极速模式内核），否则强制本机支持的最高版本IE内核，作用于IE浏览器：-->
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>