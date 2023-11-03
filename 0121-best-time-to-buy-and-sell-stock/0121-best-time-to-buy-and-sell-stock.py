def order(A): # Descending order
    for i in range(len(A) - 1):
        if A[i] - A[i+1] < 0:
            return False
    return True

class Solution(object): 
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if order(prices):
            return 0
    
        while len(prices)>0:
            if prices.index(max(prices)) == 0:
                prices.remove(max(prices))
            else:
                break
        #if min value is last index get rid of it
        while len(prices)>0:    
            if prices.index(min(prices)) == len(prices)-1:
                prices.remove(min(prices))
            else:
                break
        print(prices)
        
        
        if len(prices)==0:
            return 0
        
        answer_from_min = 0
        min_val=min(prices)
        print('minimum val is :', min_val)
        min_index = prices.index(min_val)
        print(min_index)
        new_prices = prices[min_index:len(prices)]
        print(new_prices)
        max_val = max(new_prices)
        answer_from_min = max_val-min_val
        
        
        answer_from_max = 0
        max_val=max(prices)
        print(max_val)
        max_index = prices.index(max_val)
        print(min_index)
        new_prices = prices[0:max_index+1]
        print(new_prices)
        min_val = min(new_prices)
        answer_from_max = max_val-min_val
        
        return max(answer_from_min,answer_from_max)

        
        
        
        
        