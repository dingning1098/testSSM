package com.judy.project.mapper;

import com.judy.project.model.Test;

/**
 * Created by qiuqiu on 2019/3/1.
 */
public interface TestMapper {
    Test selectByPrimaryKey(Integer id);
}
