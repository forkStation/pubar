/**
 * Created by wj on 2016/5/24.
 */
'use strict';
let yaml=require('yamljs')
let fs=require('fs')


let x=yaml.load("../proxy.yml");
console.log(x.proxy);

