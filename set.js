var Set2 = function () {
    var items = {}
    //has 檢查元素
    this.has = function (value) {
        return items.hasOwnProperty(value)
    }
    //add 添加元素 元素不重複
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return value;
        }
        return false;
    }
    //remove 移除元素
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        } else {
            return false;
        }
    }
    //clear 清空
    this.clear = function () {
        items = {};
    }
    //size 大小
    this.size = function () {
        var length = 0;
        for (var i in items) {
            if (items.hasOwnProperty(i)) {
                length++
            }
        }
        return length;
    }
    this.size2 = function(){
        return Object.keys(items).length;
    }
    
    this.value = function(){
        var values = [];
        for(let i in items){
            if(items.hasOwnProperty(i)){
                values.push(items[i])
            }
        }
        return values;
    }

    this.getItems = function () {
        return items;
    }


}
var test = new Set2();
test.add(1)
test.add(3)
test.add(9)
test.add(12)
