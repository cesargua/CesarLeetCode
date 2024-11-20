class MinStack {

    public MinStack() {
        stack_list = new ArrayList<>();
        size = 0;
    }
    
    public void push(int val) {
        size++;
        stack_list.add(val);
        // System.out.println(stack_list);
    }
    
    public void pop() {
        size--;
        stack_list.remove(size);
        // System.out.println(stack_list);
    }
    
    public int top() {
        return stack_list.get(size-1);
    }
    
    public int getMin() {
        ArrayList<Integer> clone = (ArrayList<Integer>) stack_list.clone();
        Collections.sort(clone);
        return clone.get(0);
    }

    private ArrayList<Integer> stack_list;
    private int size;
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */