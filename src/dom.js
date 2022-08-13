window.dom={
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    // 添加样式或者获取样式
    style(node,name,value){
        if(arguments.length===3){
            // dom.style(div, 'color', 'red')
            // node.style:在标签内加style属性，如<div style='color:red'></div>
            node.style[name]=value
        }else if(arguments.length===2){
            if(typeof name === 'string'){
                // dom.style(div, 'color'):想获取样式，而不是添加样式
                return node.style[name]
            }else if(name instanceof Object){
                // dom.style(div, {color: 'red'}):添加样式
                for(let key in name){
                    node.style[key]=name[key]
                }
            }
        }
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    }
}