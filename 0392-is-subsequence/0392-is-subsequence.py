import re
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        ##strategy
        #have a flag, set it to false
        flag = True

        #have an index tracker starting at -1
        index = -1


        #make a for loop iterating through s
            #use re.search to find if character is in t
            #if flag.start() greater than the current index tracker
                #set flag to true
                #remove character from string?
            #else
                #set flag to false
        # if s in t:
        #     return True

        # for char in s:
        #     index_curr = t.find(char)
           
        #     print(char, ":", index_curr)
        #     if index_curr == -1:
        #         return False
        #     elif index_curr <= index:
        #         t = t.replace(t[index_curr], "", 1)
        #         if char not in t:
        #             return False
        #     else: 
        #         index = index_curr
        #         t = t.replace(t[index_curr], "", 1)
        #         print(s)
        i = 0
        j = 0
        while i != len(s):
            if j == len(t):
                return False
            if s[i] == t[j]:
                i+=1
                j+=1
            else:
                j += 1

        return True 
                
                



        