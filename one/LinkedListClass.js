class _NODE {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(item){
        this.head = new _NODE(item, this.head)
    }
}

module.exports = LinkedList