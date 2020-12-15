function listfun() {
    alert("list");
}

var likedlist = function () {
    //鏈表頭
    var head = null;
    //鏈表長度
    var length = 0;

    //鏈表元素
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    //鏈表 尾部 添加元素
    this.append = function (element) {
        var node = new Node(element);

        if (head == null) {
            head = node
        } else {
            /*current 查看 next 是 null 嗎*/
            var current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    //鏈表 插入 元素
    this.insert = function (position, element) {
        if (position > -1 && position < length) {

            var node = new Node(element);
            
            if (position == 0) {
                var current = head;
                head = node;
                node.next = current;
            } else {
                var index = 0;
                //當前
                var current = head;
                //上一個
                var previous = null;
                //往下走
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = node;
                node.next = current
            }
            length++
        }
    }
    
    //鏈表 該位置 元素
    this.removeAt = function(position){
        if(position > -1 && position < length){
            
            if(position == 0){
                var current = head;
                head = current.next;
            }else{
                var index = 0;
                var current = head;
                var previous = null;
                while(index < position){
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            length--;
            return current;
        }
        return null;
    }
    //獲取 元素 位置
    this.indexOf = function(element){
        var index = 0;
        var current = head;
        while(current){
            if(current.element == element){
                return index;
            }
            current = current.next
            index++
        }
        return-1
    }
    // 刪除元素
    this.remove = function(element){
        return this.removeAt(this.indexOf(element))
    }
    
    this.isEmpty = function(){
        return length == 0;    
    }
    this.size = function(){
        return length;
    }
    
    
    this.getHead = function () {
        return head;
    }

}

var l = new likedlist();
l.append(1);
l.append(2);
l.append(3);
l.insert(1,10);

