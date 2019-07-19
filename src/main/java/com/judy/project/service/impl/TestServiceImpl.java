package com.judy.project.service.impl;

import com.judy.project.mapper.TestMapper;
import com.judy.project.model.Test;
import com.judy.project.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by qiuqiu on 2019/3/1.
 */
@Service("/testService")
public class TestServiceImpl implements TestService {
    @Autowired
    private TestMapper testMapper;

    public Test getById(int id) {
        return testMapper.selectByPrimaryKey(id);
    }
}
