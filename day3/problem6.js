function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) rv[i] = arr[i];
    console.log("Cac phan tu mang tro thanh object: ");
    return rv;
}