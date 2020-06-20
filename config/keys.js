if (process.env.NODE_ENV ==='production'){
    //return the productionset of keys
    module.exports=require('./prod');
}else{
    //return the dev set of keys
    module.exports=require('./dev');
}
