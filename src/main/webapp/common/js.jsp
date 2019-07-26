<script src="${ctx }plugins/jquery/dist/jquery-1.8.3.min.js"></script>
<script src="${ctx }plugins/miniui/boot.js"></script>
<script src="${ctx }plugins/ytport/extJquery.js"></script>
<script src="${ctx }plugins/ytport/base-mini.js"></script>
<script src="${ctx }plugins/echarts/echarts.min.js"></script>
<script src="${ctx }plugins/jquery-form/jquery.form.min.js"></script>
<script src="${ctx }plugins/echarts/walden.js"></script>



<style>
    body {
        margin: 0;
        padding: 0;
        border: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    form {
        display: inline;
    }

    .datagrid-sort-asc-header .mini-grid-headerCell-inner:after{
        background: url('${ctx }plugins/easyui/themes/default/images/datagrid_icons.png') no-repeat 0px center;
        width:10px;
        height:10px;
        display: inline;
        padding: 0 13px 0 0;
        content:"";
    }

    .datagrid-sort-desc-header .mini-grid-headerCell-inner:after{
        content:"";
        width:10px;
        height:10px;
        display: inline;
        padding: 0 13px 0 0;
        background: url('${ctx }plugins/easyui/themes/default/images/datagrid_icons.png') no-repeat -16px center;
    }
</style>
<link href="${ctx }plugins/miniui/themes/bootstrap/skin.css" rel="stylesheet" />