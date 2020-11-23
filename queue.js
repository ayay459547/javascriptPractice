function queuefun(){
    alert("Queue js 實作");
}
/*
    enqueue 添加元素
    dequeue  移除元素
    front 查找最頂元素
    isEmpty 檢查是否為空
    clear 移除全部元素
    size  獲取長度
*/

var Queue = function(){
    var items = [] //私有
    this.enqueue = function(element){
        items.push(element)
    } 
    this.dequeue = function(){
        return items.shift()
    }
    this.front = function(){
        return items[0]
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
// 傳花遊戲 數到number 淘汰拿花的
var chuanhua = function(players,number){
    var q = new Queue()
    for(var i=0;i<players.length;i++){
        q.enqueue(players[i])
        
    }
    var taotai
    while(q.size() > 1){
        //數1,2
        for(var i=0;i<number-1;i++){
            //function 執行 stack 先進先出
            q.enqueue(q.dequeue())
//            console.log(q.getItems())
        }
        //數3
        taotai = q.dequeue()
        console.log('淘汰玩家是:' + taotai)
    }
    return q.dequeue()
}

//玩家列表
var players = ['a','b','c','d','e','f']
//遊戲規則
var number = 3

//飛機 高級會員 優先登機

// 優先級 priorityQueue
var PriorityQueue = function(){
    var items = []
    
    //輔助類 會員
    var QueueItem = function(element,priority){
        //會員名
        this.element = element;
        //會員等級
        this.priority = priority;
    }
    
    this.enqueue = function(element,priority){
        var queueItem = new QueueItem(element,priority);
        
        var added = false;
        
        for(var i=0;i<items.length;i++){
            if(queueItem.priority > items[i].priority){
                items.splice(i,0,queueItem);
                added = true;
                break;
            }
        }
        
        if(!added){
            items.push(queueItem)
        }
    }
    this.getItem = function(){
        return items;
    }
}

var pq = new PriorityQueue();
pq.enqueue('小黑',10);
pq.enqueue('小名',12);
pq.enqueue('小白',15);




