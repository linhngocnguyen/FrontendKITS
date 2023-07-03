function countAttributes(obj){
    if(typeof obj !== "object") return 1;
    if(obj.length===undefined){
        let count=1;
        for (let p in obj) {
            count+=countAttributes(obj[p]);
        }
        return count;
    }
    else{
        let count=1;
        for (let item in obj) {
            count+=countAttributes(item);
        }
        return count;
    }
}

// var count_in_level = [];
// function count(obj, level) {
//   var c = 0;
//   if (typeof level == "undefined") level = 1;
//   if (!count_in_level[level]) count_in_level[level] = 0;
//   if (typeof obj == "object") {
//     for (var i in obj) {
//       if (typeof obj[i] == "object") count(obj[i], level + 1);
//       c++;
//     }
//     count_in_level[level] += c;
//   }
// }
// let obj = {
//   emp1: { 
//     id: [
//         { code: 1, 
//           bar: "anx" 
//     }], 
//     name: "An" },
//   emp2: { 
//     id: [
//         { code: 2, 
//           bar: "biy" 
//     }], 
//     name: "Binh" },
// };
// count(obj);
// console.log(count_in_level);
