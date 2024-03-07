class Solution(object):
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        if len(nums) < 3:
            return False
        
        #have 2 'greedy' variables start off at the greatest possible integer
        min1 = float('inf')
        min2 = float('inf')
        
        #have a loop that will contiously replace each min as we move through the list linearly 
        
        for elem in nums:
            if elem <= min1:
                min1 = elem
            elif elem <= min2:
                min2 = elem
            else:
                return True
        return False