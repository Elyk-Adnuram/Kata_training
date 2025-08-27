'''
Given an array (arr) as an argument complete the function countSmileys that 
should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for 
a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either
 ) or D. 
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

'''


import re


def count_smileys(arr):
    '''
    Determine number of smiley faces in the list

    Parameters:
    arr : List of string values

    Return
    integer: Occurrences of smiley faces in the list

    '''
    count = 0
    smiley_regex = re.compile(r'^[:;][-~]?[D)]$')
    for index, char in enumerate(arr):
        if smiley_regex.match(char):
            count += 1
    return count

