<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019-07-22
  Time: 15:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<div class="mini-datagrid" id="test" url="${ctx}test/get?id=1">

</div>

</body>
<%@ include file="/common/glt-js.jsp"%>
<script type="text/javascript">
    initGlobal();
    mini.parse();
    var test = mini.get("test");

</script>
</html>
