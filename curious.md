I got a queer weird error I had never seen before 
when running tests for my merge algorithm.

The error reads:
#
# Fatal error in , line 0
# Fatal JavaScript invalid size error 169220804
#
#
#
#FailureMessage Object: 000000987AEFD570
 1: 00007FF6453330AF v8::internal::CodeObjectRegistry::~CodeObjectRegistry+112511
 2: 00007FF64525023F v8::CFunctionInfo::HasOptions+7055
 3: 00007FF645F26392 V8_Fatal+162
 4: 00007FF645AAFCF5 v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArray+101
 5: 00007FF6459703B2 v8::Message::GetIsolate+16706
 6: 00007FF6457E4711 v8::internal::CompilationCache::IsEnabledScriptAndEval+26849
 7: 00007FF645C82541 v8::internal::SetupIsolateDelegate::SetupHeap+494417
 8: 0000022CDE009054

I think its because I had not passed a parameter in the method array.unshift ie arr1.unshift() 

My code was
````
/**
 * Write a function, mergeSort, that takes in an array of numbers as an argument. The function should return a new array containing elements of the original array sorted in ascending order. Your function must implement the merge sort algorithm.
 * @param {*[]} elements 
 * @returns {*[]}
 */
const mergeSort = (elements) => {
    if (elements.length < 2) return [...elements];
    const middleIdx = Math.floor(elements.length / 2)
    const left = mergeSort(elements.slice(0, middleIdx))
    const right = mergeSort(elements.slice(middleIdx))
    return merge(left, right)
};

/**
 * Merge two sorted arrays into one new sorted array
 * @param {*[]} arr1 
 * @param {*[]} arr2 
 * @returns {*[]}
 */
function merge(arr1, arr2) {
    let result = []
    while (arr1.length > 0 && arr2.length > 0) {
        (arr1[0] < arr2[0])
            ? result.push(arr1.unshift())
            : result.push(arr2.unshift());
    }
    result.push(...arr1, ...arr2)
    return result;
}

module.exports = {
    mergeSort,
};


````