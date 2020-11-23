function stackfun(){
    alert("Stack js 實作");
}
/*
    push 添加元素
    pop  移除元素
    peek 查找最頂元素
    isEmpty 檢查是否為空
    clear 移除全部元素
    size  獲取長度
*/
var Stack = function(){
    var items = [] //私有
    this.push = function(element){
        items.push(element)
    } 
    this.pop = function(){
        return items.pop()
    }
    this.peek = function(){
        return items[items.length-1]
    }
    this.isEmpty = function(){
        return items.length == 0
    }
    this.clear = function(){
        items = []
    }
    this.size = function(){
        return items.length
    }
    // 檢查元素
    this.getItems = function(){
        return items
    }
}
//10轉2進制
var divBy2 = function(number){
    var stack1 = new Stack()
    var yushu
    var string2 = ''
    
    while(number > 0){
        yushu = number % 2
        stack1.push(yushu)
//        console.log(stack1.getItems())
        number = Math.floor(number / 2)
    }
    while(!stack1.isEmpty()){
//        console.log(stack1.getItems())
        string2 += stack1.pop()
    }
    return string2
}
//完成順序 fun1 > fun2
var fun1 = function(){
    return console.log("fun1 finish")
}
var fun2 = function(){
    fun1()
    return console.log("fun2 finish")
}
fun2()



