//hashMap
var hashTable = function(){
    var items = [];
    
    var loseloseHashCode = function(key){
        var hash = 0;
        for(var i=0;i<key.length;i++){
            hash += key[i].charCodeAt();
        }
        return hash % 37
    }
    var djb2HashCode = function(){
        
    }
    
    this.put = function(key,value){
        var position = loseloseHashCode(key);
        console.log(position + '-' + value);
        items[position] = value;
    }
    this.remove = function(key){
        items[loseloseHashCode(key)] = undefined;
    }
    this.get = function(key){
        return items[loseloseHashCode(key)]
    }
    
    this.getItems = function(){
        return items;
    }
}

var ht = new hashTable();
ht.put("Jobs","Jobs@qq.com")
ht.put("Bob","Bob@qq.com")