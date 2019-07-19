package com.judy.project.controller;

import com.judy.project.model.Test;
import com.judy.project.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by qiuqiu on 2019/3/1.
 */
@Controller
@RequestMapping("/test")
public class TestController {
    //    依赖注入Service服务对象
    @Autowired
    private TestService testService;
    //让返回值为JSON，但是pojo对象必须实现了getter和setter方法，不然会出现转换失败的错误
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    @ResponseBody
    public Test getTestById(@RequestParam("id") String id) {
        return testService.getById(Integer.parseInt(id));
    }
}
