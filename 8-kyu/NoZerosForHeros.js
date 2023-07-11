/**
 * Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
 */

function noBoringZeros(n) {
    let num = n.toString()
    
    while (num.endsWith('0')) {
      num = num.substring(0,num.length -1)
    }
   return +num
  }