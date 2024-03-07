class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        
        #have a collector
        collector = []
        collector1= []
        collector2=[]
        
        #create a loop where we go through each elem in nums1
        for elem in nums1:
            if elem not in nums2:
                collector1.append(elem)

        #remove duplicate
        collector1 = list(set(collector1))
        collector.append(collector1)
        
        for elem in nums2:
            if elem not in nums1:
                collector2.append(elem)
                
        collector2= list(set(collector2))
        collector.append(collector2)
        
        return collector